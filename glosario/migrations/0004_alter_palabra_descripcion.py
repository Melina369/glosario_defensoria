# Generated by Django 4.1 on 2023-11-17 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('glosario', '0003_palabra_titulo_delete_termino_palabra_titulo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='palabra',
            name='descripcion',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]