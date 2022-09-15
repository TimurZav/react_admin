// in src/users.js
import * as React from "react";
import { Box, Divider, Grid } from '@mui/material'
import Done from '@mui/icons-material/Done'
import Clear from '@mui/icons-material/Clear';
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
    Pagination,
    ImageField,
    BooleanField,
    ShowButton,
    ListButton,
    TopToolbar,
    DeleteButton,
    Show,
    SimpleShowLayout,
    Labeled
    } from 'react-admin';

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
            <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="url_image" />
                    <Box display={{ xs: 'flex', sm: 'block', width: '35%' }}>
                        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                            <TextField multiline label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                        </Box>
                        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                            <BooleanField label="validation" source="data_json.predicted_box.0.cells.0.validation" />
                        </Box>
                    </Box>
                    <TextField label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.0.cells.0.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="label_text" source="data_json.predicted_box.0.cells.1.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.0.cells.1.validation" TrueIcon={Done} FalseIcon={Clear} />

                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.0.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.0.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.1.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.1.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.2.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.2.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.3.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.3.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.4.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.4.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.5.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.5.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.6.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.6.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.7.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.7.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.8.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.8.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.9.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.9.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.10.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.10.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.11.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.11.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.12.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.12.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.13.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.13.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.14.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.14.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.15.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.15.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.16.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.16.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.17.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.17.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.18.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.18.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.19.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.19.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.20.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.20.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.21.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.21.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.22.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.22.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.23.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.23.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.24.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.24.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.25.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.25.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.26.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.26.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.27.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.27.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.28.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.28.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.29.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.29.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.30.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.30.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.31.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.31.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.32.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.32.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.33.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.33.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.34.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.34.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.35.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.35.validation" TrueIcon={Done} FalseIcon={Clear} />
                    <TextField label="cell_text" source="data_json.predicted_box.1.cells.36.text" />
                    <BooleanField label="validation" source="data_json.predicted_box.1.cells.36.validation" TrueIcon={Done} FalseIcon={Clear} />
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
            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="label_text" source="data_json.predicted_box.0.cells.0.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.0.cells.0.validation" />
                </Labeled>
            </Box>
            
            <Grid container>
                <Grid item xs={6}>
                    <SimpleShowLayout>
                        <TextInput multiline label="label_text" source="data_json.predicted_box.1.cells.0.text" />
                    </SimpleShowLayout>
                </Grid>
                <Grid item xs={6}>
                    <SimpleShowLayout>
                        <BooleanInput label="validation" source="data_json.predicted_box.1.cells.0.validation" />
                    </SimpleShowLayout>
                </Grid>
            </Grid>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="label_text" source="data_json.predicted_box.0.cells.1.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.0.cells.1.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.0.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.0.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.1.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.1.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.2.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.2.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.3.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.3.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.4.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.4.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.5.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.5.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.6.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.6.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.7.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.7.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.8.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.8.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.9.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.9.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.10.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.10.validation" />
                </Labeled>
            </Box>

            <Box display={{ xs: 'block', sm: 'flex', width: '35%' }}>
                <Labeled flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput multiline label="" source="data_json.predicted_box.1.cells.11.text" />
                </Labeled>
                <Labeled flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <BooleanInput label="validation" source="data_json.predicted_box.1.cells.11.validation" />
                </Labeled>
            </Box>

            {/* <TextInput label="label_text" source="data_json.predicted_box.0.cells.0.text" />
            <BooleanInput label="label_text" source="data_json.predicted_box.0.cells.0.validation" /> */}

            {/* <TextInput label="label_text" source="data_json.predicted_box.0.cells.1.text" />
            <BooleanInput label="label_text" source="data_json.predicted_box.0.cells.1.validation" /> */}
{/* 
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
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.11.text" /> */}
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.12.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.13.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.14.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.15.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.16.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.17.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.18.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.19.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.20.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.21.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.22.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.23.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.24.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.25.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.26.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.27.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.28.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.29.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.30.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.31.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.32.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.33.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.34.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.35.text" />
            <TextInput multiline label="cell_text" source="data_json.predicted_box.1.cells.36.text" />
        </SimpleForm>
    </Edit>)
};




export const ContainersShow = () => (
    <Show>
        <SimpleShowLayout divider={<Divider flexItem />}>
            <TextField source="id" />
            <TextField source="url_image" />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SimpleShowLayout>
                        <TextField source="url_image" />
                    </SimpleShowLayout>
                </Grid>
            </Grid>

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

            <Grid container>
                <Grid item xs={4}>
                    <SimpleShowLayout>
                        <TextField multiline label="label_text" source="data_json.predicted_box.1.cells.0.text" />
                    </SimpleShowLayout>
                </Grid>
                <Grid item xs={4}>
                    <SimpleShowLayout>
                        <TextField label="score" source="data_json.predicted_box.1.cells.0.score" />
                    </SimpleShowLayout>
                </Grid>
                <Grid item xs={4}>
                    <SimpleShowLayout>
                        <BooleanField label="validation" source="data_json.predicted_box.1.cells.0.validation" />
                    </SimpleShowLayout>
                </Grid>
            </Grid>



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
            
        </SimpleShowLayout>
    </Show>
);