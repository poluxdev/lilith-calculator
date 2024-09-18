import React, { useState } from 'react';
import LilithEnAries from './LilithEnAries';
import LilithEnTauro from './LilithEnTauro';
import LilithEnGeminis from './LilithEnGeminis';
import LilithEnCancer from './LilithEnCancer';
import LilithEnLeo from './LilithEnLeo';
import LilithEnVirgo from './LilithEnVirgo';
import LilithEnLibra from './LilithEnLibra';
import LilithEnEscorpio from './LilithEnEscorpio';
import LilithEnSagitario from './LilithEnSagitario';
import LilithEnCapricornio from './LilithEnCapricornio';
import LilithEnAcuario from './LilithEnAcuario';
import LilithEnPiscis from './LilithEnPiscis';

const LilithCalculator = ({ onSignCalculated }) => {
    const [birthdate, setBirthdate] = useState('');
    const [resultSign, setResultSign] = useState('');

    const lilithPeriods = [
        { sign: "Aries", startDate: new Date('1975-10-31'), endDate: new Date('1976-07-26') },
        { sign: "Tauro", startDate: new Date('1976-07-27'), endDate: new Date('1977-04-22') },
        { sign: "Géminis", startDate: new Date('1977-04-23'), endDate: new Date('1978-01-18') },
        { sign: "Cáncer", startDate: new Date('1978-01-19'), endDate: new Date('1978-10-15') },
        { sign: "Leo", startDate: new Date('1978-10-16'), endDate: new Date('1979-07-12') },
        { sign: "Virgo", startDate: new Date('1979-07-13'), endDate: new Date('1980-04-07') },
        { sign: "Libra", startDate: new Date('1980-04-08'), endDate: new Date('1981-01-02') },
        { sign: "Escorpio", startDate: new Date('1981-01-03'), endDate: new Date('1981-09-28') },
        { sign: "Sagitario", startDate: new Date('1981-09-29'), endDate: new Date('1982-06-25') },
        { sign: "Capricornio", startDate: new Date('1982-06-26'), endDate: new Date('1983-03-22') },
        { sign: "Acuario", startDate: new Date('1983-03-23'), endDate: new Date('1983-12-18') },
        { sign: "Piscis", startDate: new Date('1983-12-19'), endDate: new Date('1984-09-14') },
        { sign: "Aries", startDate: new Date('1984-09-15'), endDate: new Date('1985-06-10') },
        { sign: "Tauro", startDate: new Date('1985-06-11'), endDate: new Date('1986-03-07') },
        { sign: "Géminis", startDate: new Date('1986-03-08'), endDate: new Date('1986-12-02') },
        { sign: "Cáncer", startDate: new Date('1986-12-03'), endDate: new Date('1987-08-29') },
        { sign: "Leo", startDate: new Date('1987-08-30'), endDate: new Date('1988-05-24') },
        { sign: "Virgo", startDate: new Date('1988-05-25'), endDate: new Date('1989-02-18') },
        { sign: "Libra", startDate: new Date('1989-02-19'), endDate: new Date('1989-11-15') },
        { sign: "Escorpio", startDate: new Date('1989-11-16'), endDate: new Date('1990-08-11') },
        { sign: "Sagitario", startDate: new Date('1990-08-12'), endDate: new Date('1991-05-07') },
        { sign: "Capricornio", startDate: new Date('1991-05-08'), endDate: new Date('1992-02-03') },
        { sign: "Acuario", startDate: new Date('1992-02-04'), endDate: new Date('1992-10-30') },
        { sign: "Piscis", startDate: new Date('1992-10-31'), endDate: new Date('1993-07-26') },
        { sign: "Aries", startDate: new Date('1993-07-27'), endDate: new Date('1994-04-22') },
        { sign: "Tauro", startDate: new Date('1994-04-23'), endDate: new Date('1995-01-18') },
        { sign: "Géminis", startDate: new Date('1995-01-19'), endDate: new Date('1995-10-14') },
        { sign: "Cáncer", startDate: new Date('1995-10-15'), endDate: new Date('1996-07-10') },
        { sign: "Leo", startDate: new Date('1996-07-11'), endDate: new Date('1997-04-05') },
        { sign: "Virgo", startDate: new Date('1997-04-06'), endDate: new Date('1997-12-31') },
        { sign: "Libra", startDate: new Date('1998-01-01'), endDate: new Date('1998-09-26') },
        { sign: "Escorpio", startDate: new Date('1998-09-27'), endDate: new Date('1999-06-22') },
        { sign: "Sagitario", startDate: new Date('1999-06-23'), endDate: new Date('2000-03-18') },
        { sign: "Capricornio", startDate: new Date('2000-03-19'), endDate: new Date('2000-12-14') },
        { sign: "Acuario", startDate: new Date('2000-12-15'), endDate: new Date('2001-09-10') },
        { sign: "Piscis", startDate: new Date('2001-09-11'), endDate: new Date('2002-06-06') },
        { sign: "Aries", startDate: new Date('2002-06-07'), endDate: new Date('2003-03-03') },
        { sign: "Tauro", startDate: new Date('2003-03-04'), endDate: new Date('2003-11-29') },
        { sign: "Géminis", startDate: new Date('2003-11-30'), endDate: new Date('2004-08-25') },
        { sign: "Cáncer", startDate: new Date('2004-08-26'), endDate: new Date('2005-05-22') },
        { sign: "Leo", startDate: new Date('2005-05-23'), endDate: new Date('2006-02-16') },
        { sign: "Virgo", startDate: new Date('2006-02-17'), endDate: new Date('2006-11-13') },
        { sign: "Libra", startDate: new Date('2006-11-14'), endDate: new Date('2007-08-09') },
        { sign: "Escorpio", startDate: new Date('2007-08-10'), endDate: new Date('2008-05-05') },
        { sign: "Sagitario", startDate: new Date('2008-05-06'), endDate: new Date('2009-02-01') },
        { sign: "Capricornio", startDate: new Date('2009-02-02'), endDate: new Date('2009-10-29') },
        { sign: "Acuario", startDate: new Date('2009-10-30'), endDate: new Date('2010-07-25') },
        { sign: "Piscis", startDate: new Date('2010-07-26'), endDate: new Date('2011-04-21') },
        { sign: "Aries", startDate: new Date('2011-04-22'), endDate: new Date('2012-01-17') },
        { sign: "Tauro", startDate: new Date('2012-01-18'), endDate: new Date('2012-10-14') },
        { sign: "Géminis", startDate: new Date('2012-10-15'), endDate: new Date('2013-07-10') },
        { sign: "Cáncer", startDate: new Date('2013-07-11'), endDate: new Date('2014-04-06') },
        { sign: "Leo", startDate: new Date('2014-04-07'), endDate: new Date('2015-01-02') },
        { sign: "Virgo", startDate: new Date('2015-01-03'), endDate: new Date('2015-09-28') },
        { sign: "Libra", startDate: new Date('2015-09-29'), endDate: new Date('2016-06-24') },
        { sign: "Escorpio", startDate: new Date('2016-06-25'), endDate: new Date('2017-03-21') },
        { sign: "Sagitario", startDate: new Date('2017-03-22'), endDate: new Date('2017-12-17') },
        { sign: "Capricornio", startDate: new Date('2017-12-18'), endDate: new Date('2018-09-13') },
        { sign: "Acuario", startDate: new Date('2018-09-14'), endDate: new Date('2019-06-09') },
        { sign: "Piscis", startDate: new Date('2019-06-10'), endDate: new Date('2020-03-05') },
        { sign: "Aries", startDate: new Date('2020-03-06'), endDate: new Date('2020-11-30') },
        { sign: "Tauro", startDate: new Date('2020-12-01'), endDate: new Date('2021-08-27') },
        { sign: "Géminis", startDate: new Date('2021-08-28'), endDate: new Date('2022-05-24') },
        { sign: "Cáncer", startDate: new Date('2022-05-25'), endDate: new Date('2023-02-19') },
        { sign: "Leo", startDate: new Date('2023-02-20'), endDate: new Date('2023-11-15') },
        { sign: "Virgo", startDate: new Date('2023-11-16'), endDate: new Date('2024-08-12') },
        { sign: "Libra", startDate: new Date('2024-08-13'), endDate: new Date('2025-05-08') },
    ];

    const calculateLilith = () => {
        const userDate = new Date(birthdate);

        let lilithSign = 'No disponible';

        for (let i = 0; i < lilithPeriods.length; i++) {
            if (userDate >= lilithPeriods[i].startDate && userDate <= lilithPeriods[i].endDate) {
                lilithSign = lilithPeriods[i].sign;
                break;
            }
        }

        setResultSign(lilithSign);
        if (typeof onSignCalculated === 'function') {
            onSignCalculated(lilithSign);
        } else {
            console.error('onSignCalculated is not a function');
        }
    };

    const renderSignComponent = () => {
        switch (resultSign) {
            case 'Aries': return <LilithEnAries />;
            case 'Tauro': return <LilithEnTauro />;
            case 'Géminis': return <LilithEnGeminis />;
            case 'Cáncer': return <LilithEnCancer />;
            case 'Leo': return <LilithEnLeo />;
            case 'Virgo': return <LilithEnVirgo />;
            case 'Libra': return <LilithEnLibra />;
            case 'Escorpio': return <LilithEnEscorpio />;
            case 'Sagitario': return <LilithEnSagitario />;
            case 'Capricornio': return <LilithEnCapricornio />;
            case 'Acuario': return <LilithEnAcuario />;
            case 'Piscis': return <LilithEnPiscis />;
            default: return <p>No disponible</p>;
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Calculadora de la Posición de Lilith</h1>
            <div className="card p-4">
                <div className="mb-3">
                    <label htmlFor="birthdate" className="form-label">Fecha de Nacimiento</label>
                    <input
                        type="date"
                        className="form-control"
                        id="birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>
                <button onClick={calculateLilith} className="btn btn-primary">Calcular Posición de Lilith</button>
                <div id="result" className="mt-4">
                    {renderSignComponent()}
                </div>
            </div>
        </div>
    );
};

export default LilithCalculator;
