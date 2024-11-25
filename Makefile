.PHONY: all clean test

date=$(shell date +%F)

test:
	pnpm test

build:
	pnpm build
	
