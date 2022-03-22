import * as React from 'react';
import { TextInput, SelectInput } from 'reactjs-lib';

interface CourseFormProps {
  authors: Array<any>,
  course: any,
  errors: any,
  onSave: (event: any) => void,
  onChange: () => void,
  saving: boolean
}
export default class CourseForm extends React.Component<CourseFormProps, {}> {
  render() {
    let { course, onSave, onChange, authors, saving, errors } = this.props;
    return (
      <form onSubmit={onSave}>
        <h2>{course.id ? "Edit" : "Add"} Course</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}

        <TextInput
          name="title" label="Title" value={course.title}
          onChange={onChange} error={errors.title} />
        <SelectInput
          name="authorId" label="Author" value={course.authorId || ""}
          defaultOption="Select Author"
          options={authors.map(author => ({
            value: author.id,
            text: author.name
          }))}
          onChange={onChange}
          error={errors.author} />

        <TextInput
          name="category" label="Category" value={course.category}
          onChange={onChange} error={errors.category} />

        <button type="submit" disabled={saving} className="btn btn-primary mt-2"> {saving ? "Saving" : "Save"} </button>
      </form>
    );
  }
}

