#!/bin/bash

rm -rf storage/db.sqlite
#touch storage/db.sqlite

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
