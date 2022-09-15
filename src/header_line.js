// in src/users.js
import * as React from "react";
import { Box, Divider } from '@mui/material'
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    EditButton,
    useRecordContext,
    useResourceContext,
    Pagination,
    Toolbar,
    Button,
    ShowButton,
    DeleteButton,
    Show,
    SimpleShowLayout,
    BooleanField,
    Labeled
    } from 'react-admin';

const LineTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `"${record.url_image}"` : ''}</span>;
};

const LineFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Search id" source="id" alwaysOn />
];

const LineEditExpand = () => {
    const record = useRecordContext();
    const resource = useResourceContext();
    return (
        <Edit resource={resource} id={record.id} title=" ">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="url_image" />
                <TextInput label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.4.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.5.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.6.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.7.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.8.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.9.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.10.text" />
            </SimpleForm>
        </Edit>
    );
};


export const LineList = () => (
    <List filters={LineFilters} pagination={<Pagination />}>
            <Datagrid rowClick="edit" expand={<LineEditExpand />}>
                <TextField source="id" />
                <TextField source="url_image" />
                <TextField label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                <BooleanField label="validation" source="data_json.predicted_box.0.cells.0.validation" />
                <TextField label="label_text" source="data_json.predicted_box.0.cells.1.text" />
                <BooleanField label="validation" source="data_json.predicted_box.0.cells.1.validation" />

                <TextField label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.0.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.1.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.2.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.3.validation" />

                <TextField label="cell_text" source="data_json.predicted_box.1.cells.4.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.4.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.5.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.5.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.6.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.6.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.7.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.7.validation" />

                <TextField label="cell_text" source="data_json.predicted_box.1.cells.8.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.8.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.9.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.9.validation" />
                <TextField label="cell_text" source="data_json.predicted_box.1.cells.10.text" />
                <BooleanField label="validation" source="data_json.predicted_box.1.cells.10.validation" />

                <ShowButton />
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
)




export const LineEdit = () => (
    <Edit title={<LineTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput multiline source="url_image" />
            <TextInput multiline label="label_text" source="data_json.predicted_box.0.cells.0.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.4.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.5.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.6.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.7.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.8.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.9.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.10.text" />
        </SimpleForm>
    </Edit>
);


export const LineShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="url_image" />

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField multiline label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanField label="validation" source="data_json.predicted_box.0.cells.0.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField multiline label="label_text" source="data_json.predicted_box.0.cells.1.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanField label="validation" source="data_json.predicted_box.0.cells.1.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.0.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.0.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.1.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.1.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.2.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.2.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.3.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.3.validation" />
                </Labeled>
            </Box>
        </SimpleShowLayout>
    </Show>
)