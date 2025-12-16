import { useState } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, useTheme } from '@mui/material';

import { Typography } from '@components';

import { OuterContainer, StyledForm, StyledTextField } from './Form.styles';
import { FormProps } from './Form.types';

/**
 * Form Container.
 *
 * This component will render a form on the basis of the config.
 *
 * @returns A Form reusable container.
 */
export const Form = <T extends FieldValues>({
    heading,
    fields,
    link,
    onSubmit,
}: FormProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>();

    const { palette } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <OuterContainer>
            <Typography variant="h3" color="text.primary">
                {heading}
            </Typography>

            <StyledForm onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
                {fields.map((field, index) => (
                    <StyledTextField
                        key={index}
                        placeholder={field.placeholder}
                        type={
                            field.type == 'password'
                                ? showPassword
                                    ? 'text'
                                    : 'password'
                                : field.type
                        }
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message as string}
                        slotProps={{
                            input:
                                field.type == 'password'
                                    ? {
                                          endAdornment: (
                                              <InputAdornment position="end">
                                                  <IconButton
                                                      aria-label="toggle password visibility"
                                                      onClick={
                                                          handleClickShowPassword
                                                      }
                                                      edge="end"
                                                  >
                                                      {showPassword ? (
                                                          <VisibilityOff />
                                                      ) : (
                                                          <Visibility />
                                                      )}
                                                  </IconButton>
                                              </InputAdornment>
                                          ),
                                      }
                                    : undefined,
                        }}
                        {...register(field.name, {
                            required: field.validation?.required,
                            pattern: field.validation?.pattern,
                            maxLength: field.validation?.maxLength,
                            minLength: field.validation?.minLength,
                        })}
                    />
                ))}

                <Button type="submit" variant="contained">
                    {heading}
                </Button>
            </StyledForm>

            <Typography variant="subtitle2" color="text.primary">
                {link.message}
                {'\u00A0'}
                <Link
                    style={{
                        color: palette.primary.main,
                        textDecoration: 'none',
                    }}
                    to={link.url}
                >
                    {link.to}
                </Link>
            </Typography>
        </OuterContainer>
    );
};
