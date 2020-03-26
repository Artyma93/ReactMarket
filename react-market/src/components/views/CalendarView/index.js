import React from "react";

import "date-fns";

import ruLocale from "date-fns/locale/ru";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
  
} from "@material-ui/pickers";

// import { Calendar } from '@material-ui/pickers'

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Укажите дату отчёта"
          format="dd.MM.yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />

        <DateTimePicker
          margin="normal"
          label="Укажите дату отчёта"
          value={selectedDate}
          onChange={handleDateChange}
          locale={ruLocale}
          format="dd.MM.yyyy HH:mm"
          ampm={false}
          // disablePast
          showTodayButton
          inputVariant="outlined"
          maxDate={new Date()}
        />
        {/* <Calendar /> */}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
