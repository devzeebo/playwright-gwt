# playwright-gwt
A small library to help Playwright support given-when-then style testing without a
bunch of overhead

## Usage

1. Install the package
    ```bash
    npm i --save-dev playwright-gwt
    ```
2. In your test files, import `gwt`
    ```js
    import gwt from 'playwright-gwt';
    ```
3. Write a test!
    ```js
      test('runs form validation', ({ page }) => (
        gwt({ page }, {
          given: {
            on_that_page,
            some_BAD_data,
          },
          when: {
            filling_out_the_form,
            submitting_the_form,
          },
          then: {
            form_is_INVALID,
            does_NOT_go_to_another_page,
          },
        })
      ));
    ```

## [Scenario Test](https://github.com/devzeebo/gwt-runner/blob/main/README.md#scenario-definition)

Sometimes a GWT flow doesn't make sense. You might be writing integration tests.
Or something that needs to assert something, then do another thing, then assert
something else.

In these cases, you can use the scenario definition style which allows chaining
`when` and `then`, followed by `then_when` and `then` blocks.

```ts
{
  given: {
    mock_playwright_test_function,
    GOOD_test_case,
  },
  scenario: [{
    when: {
      executing_test_case,
    },
    then: {
      assert_something,
    },
  }, {
    then_when: {
      user_submits_form,
    },
    then: {
      something_else_happens,
      yet_another_thing_is_true,
    },
  }, {
    then_when: {
      something_happens,
    },
    then: {
      expect_error: some_check,
      and: {
        something_is_still_true,
      },
    }
  }]
}
```

## Detailed Usage

Please refer to [gwt-runner](https://github.com/devzeebo/gwt-runner) for
detailed usage on how to write tests and clauses.