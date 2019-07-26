# Core Data Model
- Account: External account (saving, checking, mortgage, credit card, etc)
  managed by someone else.
- Envelope: Internal account managed by you.
- Transaction: A change to the balance of an external account. *Important* Each
  Transaction _is_ an Envelope.
- Transfer: A change to the balances of two Envelopes.

# Tasks
- Define core data model.
- Define core operations.
- Import data from sheets.
- Get some generative tests in place.
