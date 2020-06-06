export default function validate(values) {
  let errors = {};
  if (!values.title) {
    errors.title = 'Task heading is required';
  }
  if (!values.description) {
    errors.description = 'Task description is required';
  }
  return errors;
};