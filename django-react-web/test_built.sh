#!/bin/bash
# DO NOT USE IN PRODUCTION
# Run npm run build before this script
. activate_venv.sh
python manage.py runserver
