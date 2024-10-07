import React from 'react'
import { useState } from 'react'
import '../App.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Formulario() {
    const [data, setData] = useState({ name: '', surname: '', age: '', genre: '', language: '', rating: 0, acceptTerms: false })

    const [open, setOpen] = useState(false)

    const handleChangeName = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
        //console.log(data)
    }

    const handleChangeSurName = (e) => {
        setData({
            ...data,
            surname: e.target.value
        })
        //console.log(data)
    }

    const handleChangeAge = (e) => {
        setData({
            ...data,
            age: e.target.value
        })
        //console.log(data)
    }

    const handleChangeGenre = (e) => {
        setData({
            ...data,
            genre: e.target.value
        })
        // console.log(data)
    }

    const handleChangeLanguage = (e) => {
        setData({
            ...data,
            language: e.target.value
        })
        // console.log(data)
    }

    const handleCheckboxChange = (e) => {
        setData({
            ...data,
            acceptTerms: e.target.checked,
        });
        // console.log(data)
    };

    const handleRatingChange = (e, newValue) => {
        setData({
            ...data,
            rating: newValue,
        });
        // console.log(data)
    };

    const handleSubmit = (e) => {
        //Para que no mande el formulario, sino que haga lo que yo le diga
        e.preventDefault();
        setOpen(true)
        // console.log(data)
    }

    const handleClose = (e) => {
        setOpen(false)
        console.log(data)
    }

    const handleReset = () => {
        setData({
            name: '',
            surname: '',
            age: '',
            genre: '',
            language: '',
            acceptTerms: false,
            rating: 0,
        });
    };

    return (
        <>
            <Box component='form' onSubmit={handleSubmit}>
                <Grid container spacing={2} padding={1}>
                    <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
                        <TextField
                            required
                            label='Nombre'
                            variant='outlined'
                            fullWidth
                            color="secondary"
                            value={data.name}
                            onChange={handleChangeName}

                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
                        <TextField
                            required
                            label='Apellidos'
                            variant='outlined'
                            fullWidth
                            color="secondary"
                            value={data.surname}
                            onChange={handleChangeSurName}

                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
                        <TextField
                            required
                            label='Edad'
                            type='number'
                            variant='outlined'
                            fullWidth
                            color="secondary"
                            value={data.age}
                            onChange={handleChangeAge}

                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                        <FormControl>
                            <FormLabel id="genre">Género</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="genre"
                                name="genre"
                                value={data.genre}
                                onChange={handleChangeGenre}
                            >
                                <FormControlLabel value="female" control={
                                    <Radio
                                        color='secondary'
                                        required={true}
                                    />
                                }
                                    label="Femenino"
                                    sx={{ color: 'black' }}
                                />
                                <FormControlLabel value="male" control={
                                    <Radio
                                        color='secondary'
                                        required={true}
                                    />
                                }
                                    label="Masculino"
                                    sx={{ color: 'black' }}
                                />
                                <FormControlLabel value="other" control={
                                    <Radio
                                        color='secondary'
                                        required={true}
                                    />
                                }
                                    label="Otro"
                                    sx={{ color: 'black' }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
                        <FormControl fullWidth required>
                            <InputLabel>Lenguaje de programación favorito</InputLabel>
                            <Select
                                labelId="select"
                                id="select"
                                label="Lenguaje de programación favorito"
                                value={data.language}
                                onChange={handleChangeLanguage}
                                variant='outlined'
                                color='secondary'
                            >
                                <MenuItem value="js">JavaScript</MenuItem>
                                <MenuItem value="java">Java</MenuItem>
                                <MenuItem value="python">Phyton</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Typography sx={{ color: 'black' }}>Puntúa esta encuesta</Typography>
                    <Rating
                        name="rating"
                        value={data.rating}
                        onChange={handleRatingChange}
                    />
                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={data.acceptTerms}
                                    onChange={handleCheckboxChange}
                                    color="secondary" />}
                            sx={{ color: 'black' }}
                            label="He leido los terminos y condiciones"
                        />
                    </Grid>

                    <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                        <Button type='submit' variant='outlined' color='secondary' fullWidth disabled={!data.acceptTerms}>Enviar</Button>
                    </Grid>

                    <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                        <Button type='button' variant='outlined' color='error' onClick={handleReset} fullWidth>Limpiar</Button>
                    </Grid>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogTitle>
                            Confirmación
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                ¿Estás seguro de mandar la encuesta?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleClose} autoFocus>
                                Si
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Box>
        </>
    )
}

export default Formulario
