import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native';

import ErrorMessage from './ErrorMessage';
import colors from '../config/colors';

function AppFormDatePicker({ name }) {

    const {setFieldValue, errors, touched } = useFormikContext();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (name, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      setFieldValue(name, selectedDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    return (
        <>
            <Button title="Event Date" onPress={showDatepicker} color={colors.defaultButton} />
            {show && (
                <DateTimePicker
                    onChange={(event, date) => onChange(name, date)}
                    value={date}
                />
            )}
            
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormDatePicker;