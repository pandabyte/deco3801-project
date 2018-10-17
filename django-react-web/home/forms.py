from django import forms

class UploadForm(forms.Form):
    file = forms.FileField()
    token = forms.CharField()
