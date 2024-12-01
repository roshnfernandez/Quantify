import { createTheme } from '@mui/material/styles'
import { cardStyle } from './card'

export default createTheme(
    {
        components : {
            MuiCard : {...cardStyle}
        }
    }
)