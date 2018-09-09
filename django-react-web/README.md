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

`npm start:live`

View the site at `localhost:8000` for Django + React or `localhost:3000` for
only React

## Test With Built React App

Use when only making changes to Django.

1. Bundle React files: `npm run build`
1. Run the Django dev server: `./test_built.sh`

View the site at `localhost:8000`

## Create a New Super User

```
. activate_venv.sh
python manage.py createsuperuser
```
