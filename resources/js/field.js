import NestedFormField from './components/NestedFormField'
import NestedFormBelongsToField from './components/CustomFields/BelongsToField'
import NestedFormFileField from './components/CustomFields/FileField'
import NestedFormMorphToField from './components/CustomFields/MorphToField'

Nova.booting((app, store) => {
  app.component('form-nested-form', NestedFormField)
  app.component('form-nested-form-belongs-to-field', NestedFormBelongsToField)
  app.component('form-nested-form-morph-to-field', NestedFormMorphToField)
  app.component('form-nested-form-file-field', NestedFormFileField)
})
