REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/loopback-testing/node_modules/.bin/mocha \
		--reporter $(REPORTER) \

test-w:
	@NODE_ENV=test ./node_modules/loopback-testing/node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--watch

.PHONY: test test-w