
.PHONY: build
build:
	ng build --configuration production
	mv docs/index.html docs/404.html
	cp 404.html docs/index.html
