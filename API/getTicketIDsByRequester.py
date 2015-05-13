#will get back all tickets in your account by requester
import requests

url = 'https://{subdomain}.zendesk.com/api/v2/users/{requester_ID}/tickets/requested.json'
user = '{email}'
pwd = '{password}'

response = requests.get(url, auth=(user, pwd))

if response.status_code != 200:
	print('Status:', response.status_code, 'Problem with the request. Exiting.')
	exit()

data = response.json()

ticket_list = data['tickets']
ticket_ids = []
for ticket in ticket_list:
	ticket_ids.append(ticket['id'])
print ticket_ids
