from django import forms

class UploadForm(forms.Form):
    SOURCES = (
        ("ESI", "ESI"),
        ("APCI", "APCI"),
    )
    MODES = (
        ("POSITIVE", "POSITIVE"),
    )
    file = forms.FileField()
    mode = forms.ChoiceField(label="Mode", choices=MODES)
    source = forms.ChoiceField(label="Source", choices=SOURCES)
    token = forms.CharField()
