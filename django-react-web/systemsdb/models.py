from django.db import models

class hrms_system(models.Model):
    brandName= models.TextField()
    modelName = models.TextField()
    #className = models.TextField()
    
    
class acquisition_hrms(models.Model):
    hrms_id = models.ForeignKey(hrms_system, on_delete=models.CASCADE)
    sourceName = models.TextField()
    mode = models.TextField()
    ionisation = models.TextField()
    Voltage = models.IntegerField()
    #polarity = boolean? +/-
    SourceGas1 = models.IntegerField()
    SourceGas2 = models.IntegerField()
    CurtainGas = models.IntegerField()

class analytical_column(models.Model):
    model = models.TextField()
    brand = models.TextField()
    time_last_used = models.DateTimeField()
    phase = models.IntegerField()
    particle_size = models.FloatField()
    length = models.IntegerField()
    pore_size=models.IntegerField()
    inner_diameter=models.FloatField()

class chromatography(models.Model):
    brandName= models.TextField()
    modelName = models.TextField()
    time_last_used= models.DateTimeField()
    component_type= models.TextField()

class chrom_time(models.Model):
    chrom_events = models.IntegerField()
    event_stage=models.IntegerField()
    over_temp=models.FloatField()
    AB=models.FloatField()
    gradient_AB=models.FloatField()
    flow_rate=models.FloatField()

class acquisition_chromatography(models.Model):
    chroma_id =models.ForeignKey(chromatography,on_delete=models.CASCADE)
    chrom_events = models.ForeignKey(chrom_time, on_delete=models.CASCADE)
    column_id = models.ForeignKey(analytical_column, on_delete=models.CASCADE)
    mobile_phase_a = models.FloatField()
    mobile_phase_b = models.FloatField()
    sample_injection_volume = models.FloatField()
