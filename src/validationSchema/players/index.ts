import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  personal_information: yup.string(),
  soccer_statistics: yup.string(),
  user_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
