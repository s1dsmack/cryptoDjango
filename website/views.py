from django.shortcuts import render
from django.core.mail import send_mail

def home(request):
	import requests
	import json

	# Grab Crypto Price Data
	price_request = requests.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,EOS,LTC,XLM,ADA,USDT,MIOTA,TRX&tsyms=USD&api_key={d4bafe10db33ad3015cbc467f69fa119c971b2e64c5434ff25a5d427c8c77914}")
	price = json.loads(price_request.content)

	# Grab Crypto News
	api_request = requests.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={d4bafe10db33ad3015cbc467f69fa119c971b2e64c5434ff25a5d427c8c77914}")
	api = json.loads(api_request.content)
	return render(request, 'home.html', {'api': api, 'price': price})

	return render(request, 'home.html', {})


def prices(request):
	if request.method == 'POST':
		import requests
		import json
		quote = request.POST['quote']
		quote = quote.upper()
		crypto_request = requests.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + quote + "&tsyms=USD&api_key={d4bafe10db33ad3015cbc467f69fa119c971b2e64c5434ff25a5d427c8c77914}")
		crypto = json.loads(crypto_request.content)
		return render(request, 'prices.html', {'quote': quote, 'crypto': crypto})


	else:
		notfound = "Enter a crypto currency symbol into the form above..."
		return render(request, 'prices.html', {'notfound': notfound})


def terms(request):
	return render(request, 'terms.html', {})


def contact(request):

	if request.method == "POST":
		#do stuff
		message_name = request.POST['message-name']
		message_email = request.POST['message-email']
		message = request.POST['message'] 
		

		# Send email
		send_mail(
			'Message From: ' + message_name, # subject
			message, # message
			message_email, # from email
			['webmaster.cryptonewsnetwork@gmail.com'], # to email
			fail_silently=False,
			)

		return render(request, 'contact.html', {'message_name':message_name})
	
	else:

		return render(request, 'contact.html', {})


def subscribe(request):

	if request.method == "POST":
		#do stuff
		message_email = request.POST['message-email']
		

		# Send email
		send_mail(
			'Add to subscriber list', # subject
			'Add email: ' + message_email, # message
			message_email, # from email
			['webmaster.cryptonewsnetwork@gmail.com'], # to email
			fail_silently=False,
			)

		return render(request, 'subscribe.html', {'message_email':message_email})
	
	else:

		return render(request, 'subscribe.html', {})