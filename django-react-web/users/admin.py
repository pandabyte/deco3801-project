from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, UsernameField
from django.utils.translation import gettext_lazy as _

from .models import User, Affiliation, user_hrms, user_column, user_chroma
from systemsdb.models import hrms_system, chromatography 

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = ('email', 'username', 'first_name', 'last_name')
        field_classes = {'email': UsernameField, 'username': UsernameField}

class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User

class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'username')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        (None, {'fields': ('aid', 'position')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm

class CustomUserHRMS(admin.ModelAdmin):
    list_display = ('User_id','HRMS_id')
    fieldsets = [
        ('User',{'fields': ['User_id']}),('HRMS', {'fields': ['HRMS_id']}),
    ]
    list_filter=('User_id__email','HRMS_id__brandName','HRMS_id__modelName')
    search_fields=('User_id__email','HRMS_id__brandName','HRMS_id__modelName')

class CustomUserChroma(admin.ModelAdmin):
    list_display = ('User_id','Chroma_id')
    fieldsets = [('User',{'fields': ['User_id']}),('Chromatography', {'fields': ['Chroma_id']}),
    ]
    list_filter=('User_id__email','Chroma_id__brandName','Chroma_id__modelName','Chroma_id__component_type')
    search_fields=('User_id__email','Chroma_id__brandName','Chroma_id__modelName','Chroma_id__component_type')

class CustomUserColumn(admin.ModelAdmin):
    list_display = ('User_id','Column_id')
    fieldsets = [('User',{'fields': ['User_id']}),('Column', {'fields': ['Column_id']}),
    ]
    list_filter=('User_id__email','Column_id__brand','Column_id__model')
    search_fields=('User_id__email','Column_id__brand','Column_Id__model')
        


        

admin.site.register(User, CustomUserAdmin)
admin.site.register(Affiliation)
admin.site.register(user_hrms,CustomUserHRMS)
admin.site.register(user_column,CustomUserColumn)
admin.site.register(user_chroma,CustomUserChroma)
