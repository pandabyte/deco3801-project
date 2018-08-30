# Django + React Test Run

## Requirements

- [Python 3.6](https://www.python.org/)
- [Pipenv](https://docs.pipenv.org/)
- [Node 8.10 with npm](https://nodejs.org/)

## Set Up Environment

```
git clone <url>
cd <project-folder>
pipenv install
npm install
./test_migrate.sh
```

## Test With Hot Reloading React App

Use when making changes to React.

1. Run Webpack dev server: `npm start`
2. Run the Django dev server in a second terminal
    - Bash: `./test_live.sh`
    - Cmd:
        ```
        pipenv shell
        set SECRET_KEY=<secret>
        set DJANGO_DEV=true
        python manage.py runserver
        ```
6. View the site at `localhost:8000`

## Test With Built React App

Use when only making changes to Django.

1. Bundle React files: `npm run build`
2. Run the Django dev server
    - Bash: `./test_built.sh`
    - Cmd:
        ```
        pipenv shell
        set SECRET_KEY=<secret>
        set DJANGO_DEV=
        python manage.py runserver
        ```
3. View the site at `localhost:8000`

## Create a New Super User

```
pipenv shell
. set_test_secret.sh
python manage.py createsuperuser
```
