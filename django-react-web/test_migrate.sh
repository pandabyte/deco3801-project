#!/bin/bash
# DO NOT USE IN PRODUCTION
# Run npm run build before this script
. activate_venv.sh
python manage.py makemigrations users home v1
python manage.py migrate
