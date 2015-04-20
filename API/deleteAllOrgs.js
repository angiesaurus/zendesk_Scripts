var v_subdomain = "SUBDOMAIN";
var v_orgs_amount = ORGAMOUNTS;

function getOrgs(page) {

    $.ajax({
        url: "https://" + v_subdomain + ".zendesk.com/api/v2/organizations.json?page=" + page,
        type: "GET",
        dataType: "JSON"
    }).done(function(data) {
        console.log(data);
        for (var i = 0; i < data.organizations.length; i++) {
            var orgid = data.organizations[i].id;
            deleteOrg(orgid)
        }
    });
}


function deleteOrg(orgID) {
    setTimeout(function() {
        $.ajax({
            url: "https://" + v_subdomain + ".zendesk.com/api/v2/organizations/" + orgID + ".json",
            type: "DELETE",
            dataType: "JSON"
        }).done(function(data) {
            console.log("Organization " + orgID + " Deleted");
        }).fail(function(data) {
            console.log("Can't delete organization ID " + orgID);
        })
    }, 5000);
}

for (var j = 0; j < Math.ceil(v_orgs_amount / 100); j++) {
    getOrgs(j + 1);
}
