from django.contrib import admin
from .models import hrms_system, acquisition_hrms, analytical_column, chromatography, chrom_time, acquisition_chromatography


# Register your models here.


class CustomHRMSS(admin.ModelAdmin):
    list_display = ('brandName','modelName')
    fieldsets = [
        ('Brand & Model',{'fields': ['brandName','modelName']}),
    ]
    list_filter=('brandName','modelName')
    search_fields=('brandName','modelName')

class CustomAHRMS(admin.ModelAdmin):
    list_display = ('hrms_id', 'sourceName', 'mode', 'ionisation', 'Voltage', 'SourceGas1', 'SourceGas2', 'CurtainGas')
    fieldsets = [
        ('HRMS',{'fields':['hrms_id','sourceName']}),('Acquisition Set Up',{'fields':['mode','ionisation','Voltage','SourceGas1','SourceGas2','CurtainGas']}),
        ]
    list_filter = ('hrms_id', 'sourceName','mode','ionisation','SourceGas1','SourceGas2','CurtainGas')
    search_fields = ('hrms_id', 'sourceName','mode','ionisation','SourceGas1','SourceGas2','CurtainGas')

class CustomColumn(admin.ModelAdmin):
    list_display = ('brand','model','time_last_used','phase','particle_size','length','pore_size','inner_diameter')
    fieldsets = [
        ('Column',{'fields':['brand','model']}),('Time Last Used',{'fields':['time_last_used']}),('Column Set Up',{'fields':['phase','particle_size','length','pore_size','inner_diameter']}),
        ]
    list_filter = ('brand','model')
    search_fields = ('brand','model')

class CustomChroma(admin.ModelAdmin):
    list_display=('brandName','modelName','time_last_used','component_type')
    fieldsets = [
        ('Brand & Model',{'fields':['brandName','modelName']}),('Time Last Used',{'fields':['time_last_used']}),('Component',{'fields':['component_type']}),
    ]
    list_filter = ('brandName','modelName')
    search_fields=('brandName','modelName','component_type')

class CustomCT(admin.ModelAdmin):
    list_display = ('chrom_events','event_stage','oven_temp', 'AB', 'gradient_AB', 'flow_rate')
    fieldsets = [
        ('Events',{'fields':['chrom_events','even_stage']}),('Oven Temperature',{'fields':['oven_temp']}),('AB',{'fields':['AB','gradient_AB']}),('Flow Rate', {'fields':['flow_rate']})
        ]
class CustomACHROMA(admin.ModelAdmin):
    list_display = ('chroma_id','chrom_events','column_id','mobile_phase_a','mobile_phase_b','sample_inject_volumne')
    fieldsets = [
        ('Chromatography, Events, Column',{'fields':['chroma_id','chrom_events','column_id']}),('Phases',{'fields':['mobile_phase_a','mobile_phase_b']}),('Sample Injection Volume',{'fields':['sample_injection_volume']})
        ]
    list_filter = ('chroma_id', 'chrom_events','column_id')
    search_fields = ('chroma_id', 'chrom_events','column_id')

admin.site.register(hrms_system, CustomHRMSS)
admin.site.register(acquisition_hrms, CustomAHRMS)
admin.site.register(analytical_column, CustomColumn)
admin.site.register(chromatography, CustomChroma)
admin.site.register(chrom_time, CustomCT)
admin.site.register(acquisition_chromatography)

