from django.shortcuts import render
#New Imports 
from django.http import HttpResponseRedirect  #Redirect the page after submit
from django.contrib import messages  # Return messages 
from django.core.mail import EmailMultiAlternatives  # Required to send mails
from django.template import loader  #render templates on email body
from Ap.models import Registered_email #infomations in model.py


# Create your views here.
def home(request):
    return render(request, "home.html")

#function to render opportunities
def opportunities(request):
    return render(request, "opportunities.html")

# ==========================RESUMES=========================
#function to send frontend form
def email_frontend(request):
    if request.method == "POST":

        # check if email exits in database
        email = request.POST['email']

        if Registered_email.objects.filter(email= email).exists():
            messages.error(request, "We already have your resume in our DB")
            return HttpResponseRedirect('/opportunities')
        # ==============================
        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            #Register inside DB
            contact = Registered_email()
            contact.email = email
            contact.save()


            template = loader.get_template('resume_form.txt')
            context ={
                'name': name,
                'age': age,
                'email': email,
                'phone': phone,
                'address': address,
                'experience': experience,
                'skills':skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Frontend  - Candidate", message,
                "Frontend Opportunity",
                ['h1213034k@gmail.com', email]
            )
            email.content_subtype = 'html'
            file = request.FILES['file']
            email.attach(file.name , file.read(), file.content_type)
            email.send()
            messages.success(request, 'Frontend resume sent successfully') 
            return HttpResponseRedirect('/')

#function to send backend form
def email_backend(request):
    if request.method == "POST":

        # check if email exits in database
        email = request.POST['email']

        if Registered_email.objects.filter(email= email).exists():
            messages.error(request, "We already have your resume in our DB")
            return HttpResponseRedirect('/opportunities')
        # ==============================
        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            #Register inside DB
            contact = Registered_email()
            contact.email = email
            contact.save()


            template = loader.get_template('resume_form.txt')
            context ={
                'name': name,
                'age': age,
                'email': email,
                'phone': phone,
                'address': address,
                'experience': experience,
                'skills':skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Backend  - Candidate", message,
                "Backend Opportunity",
                ['h1213034k@gmail.com', email]
            )
            email.content_subtype = 'html'
            file = request.FILES['file']
            email.attach(file.name , file.read(), file.content_type)
            email.send()
            messages.success(request, 'Backend resume sent successfully') 
            return HttpResponseRedirect('/')


#function to send fullstack form
def email_fullstack(request):
    if request.method == "POST":

        # check if email exits in database
        email = request.POST['email']

        if Registered_email.objects.filter(email= email).exists():
            messages.error(request, "We already have your resume in our DB")
            return HttpResponseRedirect('/opportunities')
        # ==============================
        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            #Register inside DB
            contact = Registered_email()
            contact.email = email
            contact.save()


            template = loader.get_template('resume_form.txt')
            context ={
                'name': name,
                'age': age,
                'email': email,
                'phone': phone,
                'address': address,
                'experience': experience,
                'skills':skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
                "Fullstack  - Candidate", message,
                "Fullstack Opportunity",
                ['h1213034k@gmail.com', email]
            )
            email.content_subtype = 'html'
            file = request.FILES['file']
            email.attach(file.name , file.read(), file.content_type)
            email.send()
            messages.success(request, 'Fullstack resume sent successfully') 
            return HttpResponseRedirect('/')
