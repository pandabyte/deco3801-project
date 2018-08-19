# Django + React Test Run

## Requirements

- [Python 3.6](https://www.python.org/)
- [Pipenv](https://docs.pipenv.org/)
- [Node 8.10 with npm](https://nodejs.org/)

## Set Up Environment

1. Clone repository with `git clone <url>`
2. Change directory into cloned repository
3. Install python dependencies with `pipenv install`
4. Install JavaScript dependencies with `npm install`
5. Migrate Django models with `./test_migrate.sh`

## Test With Hot Reloading React App

Use when making changes to React.

1. Run Webpack dev server with `npm start`
2. Run the Django dev server in a second terminal
    - Bash: `./test_live.sh`
    - Cmd:
        1. Activate python virtual environment with `pipenv shell`
        2. Set environment variable SECRET_KEY to anything with `set SECRET_KEY=<secret>`
        3. Set environment variable DJANGO_DEV to true with `set DJANGO_DEV=true`
        4. Start the Django dev server with `python manage.py runserver`
6. View the site at `localhost:8000`

## Test With Built React App

Use when only making changes to Django.

1. Bundle React files by running `npm run build`
2. Run the Django dev server
    - Bash: `./test_built.sh`
    - Cmd:
        1. Set environment variable SECRET_KEY to anything with `set SECRET_KEY=<secret>`
        2. Unset environment variable DJANGO_DEV with `set DJANGO_DEV=`
        3. Start the Django dev server with `python manage.py runserver`
3. View the site at `localhost:8000`
