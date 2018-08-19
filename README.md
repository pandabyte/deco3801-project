# Django + React Test Run

## Requirements

- [Python 3.6](https://www.python.org/)
- [Pipenv](https://docs.pipenv.org/)
- [Node 8.10 with npm](https://nodejs.org/)

## Set Up Environment

1. Clone repository: `git clone <url>`
2. Change directory into cloned repository
3. Install python dependencies: `pipenv install`
4. Install JavaScript dependencies: `npm install`
5. Migrate Django models: `./test_migrate.sh`

## Test With Hot Reloading React App

Use when making changes to React.

1. Run Webpack dev server: `npm start`
2. Run the Django dev server in a second terminal
    - Bash: `./test_live.sh`
    - Cmd:
        1. Activate python virtual environment: `pipenv shell`
        2. Set environment variable SECRET\_KEY to anything: `set SECRET\_KEY=<secret>`
        3. Set environment variable DJANGO\_DEV to true: `set DJANGO\_DEV=true`
        4. Start the Django dev server: `python manage.py runserver`
6. View the site at `localhost:8000`

## Test With Built React App

Use when only making changes to Django.

1. Bundle React files: `npm run build`
2. Run the Django dev server
    - Bash: `./test_built.sh`
    - Cmd:
        1. Set environment variable SECRET\_KEY to anything: `set SECRET\_KEY=<secret>`
        2. Unset environment variable DJANGO\_DEV: `set DJANGO\_DEV=`
        3. Start the Django dev server: `python manage.py runserver`
3. View the site at `localhost:8000`
