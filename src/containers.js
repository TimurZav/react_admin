// in src/users.js
import * as React from "react";
import { Box, Divider, Grid } from '@mui/material'
import { RichTextInput, RichTextInputToolbar, LevelSelect, ClearButtons } from 'ra-input-rich-text';
import { 
    List,
    Datagrid, 
    TextField, 
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    EditButton,
    useRecordContext,
    useResourceContext,
    Pagination,
    ImageField,
    BooleanField,
    ShowButton,
    ListButton,
    TopToolbar,
    DeleteButton,
    Show,
    SimpleShowLayout,
    Labeled,
    RichTextField,
    SaveButton,
    DeleteWithConfirmButton,
    Toolbar
    } from 'react-admin';


// const PostShow = () => (
//     <SimpleShowLayout>
//         <RichTextField disabled source="id" />
//         <RichTextField label="label_text" source="data_json.predicted_box.0.cells.0.text" />
//         <RichTextField label="label_text" source="data_json.predicted_box.0.cells.1.text" />
//         <RichTextField label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
//         <RichTextField label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
//         <RichTextField label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
//         <RichTextField label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
//     </SimpleShowLayout>
// );

const MyRichTextInput = ({ size, ...props }) => (
	<RichTextInput
        toolbar={
            <RichTextInputToolbar>
                <LevelSelect size={size} />
            </RichTextInputToolbar>
        }
		label="Body"
		source="body"
		{...props}
	/>
);

const ContainersEditExpand = () => {
    const record = useRecordContext();
    const resource = useResourceContext();
    return (
        <Edit resource={resource} id={record.id} title=" ">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                <TextInput label="label_text" source="data_json.predicted_box.0.cells.1.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
                <TextInput label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
            </SimpleForm>
        </Edit>
    );
};

const ContainersTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `"${record.url_image}"` : ''}</span>;
};

const ContainersFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Search id" source="id" alwaysOn />
];


const ContainersEditActions = () => (
    <TopToolbar>
        <ListButton />
        <ShowButton />
    </TopToolbar>
);

export const ContainersList = () => (
    <List filters={ContainersFilters} pagination={<Pagination />} >
            <Datagrid rowClick="edit" expand={<ContainersEditExpand />}>
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


                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.0.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.1.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.2.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.3.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.4.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.5.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.6.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.7.text" />
                    <TextField label="cell_text" source="data_json.predicted_box.2.cells.8.text" />
                    {/* <Box display={{ xs: 'flex', sm: 'block', width: '100%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.0.cells.0.validation" />
                        </Box>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'block', width: '100%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.0.cells.1.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.0.cells.1.validation" />
                        </Box>
                    </Box>
                    <Box label="cell_text" display={{ xs: 'flex', sm: 'block', width: '100%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.0.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.1.cells.0.validation" />
                        </Box>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'block', width: '100%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.1.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.1.cells.1.validation" />
                        </Box>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'block', width: '100%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.2.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.1.cells.2.validation" />
                        </Box>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'block', width: '100%%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.3.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.1.cells.3.validation" />
                        </Box>
                    </Box> */}
                    <ShowButton />
                    <EditButton/>
                    <DeleteButton/>
                </Datagrid>
        </List>
)


export const ContainersEdit = () => {
    return (<Edit actions={<ContainersEditActions />} title={<ContainersTitle />}>
        <SimpleForm divider={<Divider flexItem />}>
            <TextInput multiline disabled source="id" />
            <TextInput multiline label="label_text" source="data_json.predicted_box.0.cells.0.text" />
            <TextInput multiline label="label_text" source="data_json.predicted_box.0.cells.1.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
        </SimpleForm>
    </Edit>)
};




export const ContainersShow = () => (
    <Show>
        <SimpleShowLayout divider={<Divider flexItem />}>
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
);

