# Generated by Django 4.1 on 2023-11-17 12:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('glosario', '0002_termino_titulo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Palabra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('palabra', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Titulo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Termino',
        ),
        migrations.AddField(
            model_name='palabra',
            name='titulo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='palabras', to='glosario.titulo'),
        ),
    ]