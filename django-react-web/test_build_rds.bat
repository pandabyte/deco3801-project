set SECRET_KEY="secret"

:: RDS Details that you wouldn't normally pushed onto git for production (this is only test db)
set RDS_HOSTNAME=deco3801-db.cefgfdh8nxsl.us-east-2.rds.amazonaws.com
set RDS_PORT=3306
set RDS_DB_NAME=test_db
set RDS_USERNAME=root
set RDS_PASSWORD=password1

pipenv run python manage.py migrate

pipenv run python manage.py runserver
