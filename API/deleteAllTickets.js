var v_subdomain = "SUBDOMAIN";
var v_user_id = USERID;
var v_tickets_amount = AMOUNTOFTICKETS;

function getTickets(page) {

    $.ajax({
        url: "https://"+v_subdomain+".zendesk.com/api/v2/users/"+v_user_id+"/tickets/requested.json?page=" + page,
        type: "GET",
        dataType: "JSON"
    }).done(function(data) {
        var ticketIDs = data.tickets[0].id + "";
        for (var i = 1; i < data.tickets.length; i++) {
            ticketIDs += "," + data.tickets[i].id;
        }
        deleteTickets(ticketIDs);
    });
}


function deleteTickets(ticketIDs) {

    $.ajax({
        url: "https://"+v_subdomain+".zendesk.com/api/v2/tickets/destroy_many.json?ids=" + ticketIDs,
        type: "DELETE",
        dataType: "JSON"
    }).done(function(data) {
        console.log("Page Deleted");
    }).fail(function(data) {
        console.log("Can't delete page with ticket ID's " + ticketIDs);
    });
}

for (var j = 0; j < Math.ceil(v_tickets_amount/100); j++) {
    getTickets(j + 1);
}
