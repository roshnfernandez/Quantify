import { createTheme } from '@mui/material/styles'
import { cardStyle } from './card'
import menuItem from './menuItem'
import { menu } from './menu'
import { muiOutlinedInput } from './outlinedInput'
import { muiInputLabel } from './inputLabel'
import { select } from './select'

export default createTheme(
    {
        components : {
            MuiCard : {...cardStyle},
            MuiMenuItem : {...menuItem},
            MuiOutlinedInput : {...muiOutlinedInput},
            MuiMenu : {...menu},
            MuiInputLabel : {...muiInputLabel},
            MuiSelect : {...select}
        }
    }
)