#!/bin/bash

while IFS='' read -r line || [[ -n "$line" ]]; do
	
	linea=$(echo $line | grep '"codigo":')
	if [[ $linea != "" ]] ; then
		res=$(echo $linea | cut -d"," -f1 | cut -d":" -f2)
	fi

	linea=$(echo $line | grep '"json":')
	if [[ $linea != "" ]] ; then
		res=$(echo $linea | cut -d"," -f1 | cut -d":" -f2)
	fi
	echo $line
done < "db.json"
