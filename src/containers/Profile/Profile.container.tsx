import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Person2Outlined } from '@mui/icons-material';
import { Button, Stack, Tooltip } from '@mui/material';

import { EditableTextField, Heading, Typography } from '@components';
import { setUser, showSnackbar } from '@features';
import { User } from '@models';
import { useUpdateProfileMutation } from '@services';
import { useAppDispatch, useAppSelector } from '@store';

import { Config } from './config';
import { EmailHolder, StyledForm } from './Profile.styles';

/**
 * A Profile container which render the form and a button.
 * @returns A rendered Profile container.
 */
export const Profile = () => {
    const userData = useAppSelector((state) => state.user);
    const [updateUser] = useUpdateProfileMutation();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isDirty },
    } = useForm<Partial<User>>({
        values: {
            name: userData.name,
            phone_number: userData.phone_number,
        },
    });

    const [editFields, setEditFields] = useState<Record<string, boolean>>({});
    const onSubmit = async (data: Partial<User>): Promise<void> => {
        try {
            const res = await updateUser(data).unwrap();
            dispatch(setUser(res));
            setEditFields({ name: false, phone_number: false });
            dispatch(
                showSnackbar({
                    messages: ['profile updated!'],
                    options: { variant: 'success' },
                }),
            );
        } catch (e) {
            const errorData = (e as { data: Record<string, string[]> }).data;
            dispatch(
                showSnackbar({
                    messages: Object.values(errorData).flat(),
                    options: { variant: 'error' },
                }),
            );
        }
    };

    return (
        <Stack gap={5}>
            <Heading>Profile Details</Heading>
            <EmailHolder>
                <Person2Outlined />
                <Tooltip title={userData.email}>
                    <Typography
                        variant="h4"
                        color="primary.main"
                        component="span"
                        lines={1}
                    >
                        {userData.email}
                    </Typography>
                </Tooltip>
            </EmailHolder>

            <StyledForm onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
                {Config.map((field) => (
                    <EditableTextField
                        key={field.name}
                        editFields={editFields}
                        setEditFields={setEditFields}
                        title={field.placeholder}
                        type={field.type}
                        defaultValue={getValues()[field.name]}
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message as string}
                        {...register(field.name, {
                            required: field.validation?.required,
                            pattern: field.validation?.pattern,
                            maxLength: field.validation?.maxLength,
                            minLength: field.validation?.minLength,
                        })}
                    />
                ))}
                {isDirty && (
                    <Button type="submit" variant="outlined">
                        Save
                    </Button>
                )}
            </StyledForm>
        </Stack>
    );
};
