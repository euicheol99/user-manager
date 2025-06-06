import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { useUserContext } from '../components/UserContext'
import { useNavigate } from 'react-router-dom'


const Card = styled.div`
    width: 250px;
    height: 350px;
    border: 1px solid;
    margin-right: 50px;
    border-radius:12px;
    font-weight: bold;
`
const Button = styled.button`
    position: absolute;
    top:800px;
    margin-top: 50px;
    font-size: 20px;
    border: 1px solid;  
`

const UserList = () => {
    const {userList,setUserList} = useUserContext();

    const navigate = useNavigate();

    const deleteUser = (id) => {
        setUserList(prevList => prevList.filter(user => user.id !== id));
    }
    
    return (
        <Layout>
            {userList.map((newUser) => (
                <Card>
                    <img 
                    src={newUser.gender === "man" 
                        ? "data:image/png;base64,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" 
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABNVBMVEX////uQDb5sXv2kh72kRj7y6j4rnIyGw/5rnvnmmv5s3z5snv5tX39tH35rnXuOi/tNirtMSTuOjPuOC2CVzbtLR/97Rb+9PPvTT796un3oXH7xaP5rHf5qHD2jQD1m5f0ko7xY0v+8+vvTUT6zsz8397ydnDuQzjyblH3mm31imP0ioXwWUX2kmj96dseBwA7IxQgCgDutpfmk1/3rKnwYFn85uX2qKX6wJYXAAC6gVcpEwjrpnP0gF381rz94Mz5wr/zgHr3trPammtxTDPenWyUZ0bzeVj95dTxaWL61NLwV0/ybFH6vo5XOSTJjWIMAABLLx2TZUWueFBpRi/5t3P7ylb6wGb7zFT95iT81Ub82zv2opL96lv6zyf///L72Br4uSLvUSz1lXr3njv6yZr3pleo8jANAAANVElEQVR4nO2de1viSBbGIS1I50oKEEQUDQIioPa2KC0IiBe80Y6ydu/M7szu9s7s9/8IWwkEcqlckFQlzvL+Mz0+hOTHqTp1TtWpSii01FJLLbXUUksttdRSf3ql10+Ku73+8Wk+vz1WPn/a790X19N+P9rCSt/3tkuNQjieEkUxriiRGP9XFFMiKDRK+V7R76d8q9K7+UYCcgkCCFsJCEIcfqKR3/X7aefWyXEpJcat0fQS4qnU3fGJ3w/tXun+nSgKLummlKJ4d/o+IO8vwnPjqZBCKfjNdbeRSrwJbwKZyvT9RrAV5Hub+WYCYvk4sINIsbQwnyKxEFA7VsVF2qdWQHy495vGrF4i7hGfLCFVDVhTXS+lPOSTFS8Hyq32wl410JmAuO031kwXXhtwLPFh3W+ysYoFL3ugVkI8EC21l/BkiEAKiMd+44VC2yI2Plm+d8b0A17AcDh14StgseC9DzVK9BNxF+DrgoFA7KXcprgLIlZ9AyTCB5XK+wOI28doJPqRbNzjGubRiORzjXWRTB+cCADiqUaDhBfVKHFHGBBzJIMQ4fhtlzggtCLRqcYM0U44ltAgCJj3wYRwVCTXTtO+AMKuSMyfbhMdCmeKk4re1gkPFBpEQgtxpz41UuhOCWUZDz440olEIiPGLrGUwiwyPbGKP623FhF36iMfmdit6GMjhTnGA37CY988qSIR/4BR8m00VBQ/xU7oR9CtEf74O+2nJ5UFcK/WFH2KSacScS/W+JH76hTHPbPY95tQKGEmzONqpSBczpTLADg5MlDAHNbgyg1BPUezbC67v1dzoMQduGGKSkGdZSiKYmiapSBlxoYyhXnMx0MI9llqKoZmmex5zeqzYu8dEkILUnpByrIVIeY1jG0MZSXhihEQis1YfDyOOb1Y3JcaOxjIZGkzIMXuWPRE3JHp8aKEYE8X2QIwoFGAFDuwIsQ85C+8agj26fOM6ikB2MkiWqgset8nwoWjNlCh2Vh9LwPpQG2QZZEGlAkrPhEuHHmDGCN7SiqWy+UoZRBEi6F8Ilxf0JeC2sRoDJQlntIRLZwpbk+TXjDFB+dWzdJE+Ig2Iu7RYtGptnLO3nKajmjharBXLTQWmsUAAwvXaRaTsyDEnQIvFrZlKLcmhIjo0BR35L1YCgyHCteAFHuONCL2ae9FZoR1KYSzDbMoQlDADBgKvd2ZgvN5AKERawhE7LMYC3TE+SwIRdcRhNhnot68ugbKqBzJARGRI+JOgKHShTeMFzDEzjk4GYamjVEOakgkUVYzf4oIY+yKTQiqwFDZSjYXY1la+znaFLkBElU181YqQPvV0TmgBiUrTz6BzM55JcfO8g1zT4xvEyAMVV0bUX7q2nnWiQ820UlaDD9frg3qlApJGzN9MmWYaVtfk6mVFTKY5Wbgw8Zo2jmM0Q998MrHyvhXYXJ6ZwPKJADt603ADsvGsrLkKV7WBd7EhjpjTXuuoZ0SWD4c68GmK9ZYOfejndI/A2FuUMtkyhPrjxkHyjfo52tSpAq/7m2MmJl72FMQYc+LxWDin62fP46nvMGO0lDpvRkiGT+jyGY1/22ECqUiGjZuSpnIER5lRIaepsKgTLAW+sLKn4Lamwk1rJAyu79TY8bmVRtqvEcO0LrQG+x5QKhSTv7J7it9EwyGzY5EjDBtUbIA9udIAd2KzdYgoxy583yTEKM0zKERQXYeH+pWNJtT4wY+2iUCSPN0DpW+yd2Q4ybPxU3/5VraS3Q/lWbwIYI45OUHQMz3gTpNjS6Vp2S4y7On+RjHl4z//fXK8mP8AXbADq88D7tvXEmCYxj39NMRp/zgyS+HX762EYiMJfaVegl303q2/iVo3IBpfnInNreji7ZAJsZQ7aPWDTQd9/JldXW19RwzA1JnbeSDc8lD+ZKvsK2OVltn1ubncbfTjkoIzViZMcI0KQa9ATdqrb602UsZcHX1043pQbmn5Aj19NyTcgn8gZ6uWq0ru/bNYiZsau5F09lBRlDCyVp9HGdzL4eto6/PR0cK4pHJiNx18gU1b8pdteTPw+tarcOkDR90NpiHDF53NwaOzJV6vTJN6qAxvrZaRxPCL09mYyST14jHbo+tDi98Tl5ztoMObl/DG28Ig0ldlstRlzet1VXLZnqTvDRjTxqpfMmIdXDBuDuiidAs7uxw8ritFzPhKIlwI9zok3qJ+UcJIuH0cc0ugztzIEz6TRh1Q2hnQ6QzfW82vJx2KrfDhbYfOhLe4iV0lT2oj4vwpehWqvpStPs1EGL2pRE3RryaONMjc/wCPQ2Kgfureonjt0fxAoYO3HTEJ8uYxmo8VC85dO6GG5gJQ0NnQjXIfEaY8BLGNMhLrj4pcak5lDUoij250BsxZvFEVz99+vJszi0Y6gbZDW0uMdyCj+AG1MbeVOz12zdkhAWTvREqP4R+xjLo5J6Ql8S+/+37jJEf4geEzmZzevO1tbWf0UEkKsdn4FCB9DPWl1CxX+A9vqmI/JDMTE2XH5sx9jO8+9ovjl1HJaCgBW0yP6Re5VusjXsGjd/LqEp3KB4qqhD+3SUhd30zPyD1XSF8leeK6co/SAHKOuh2Op1f17RNyAEQGhCVVjhIaSe/Dc7PB49lH47j+eevrhupDDhCTdw46fW3f/27PF60IVCpYNLFjx8u50jbsIXOjzcuAFOnSnw4jKckKlOILgmv32BBXTUt9qIvFKD7erwRNGJ7/mli7Roi9t15Rl0oy2yu15sgYnJ02Z5zMpyd1fBh3/ZkVH68pC+XNrsSdwlHi2Ty5uwy5p5RWxBNYquzVv3UbC7fJSJ3PXqRIecYFbWFQ0TqaWYqqiVuYMf9oiFsoNdPkNI9oXZzCWEbagoW3DbTKSV6Xh8lJqdbGiHpaTSVQ1jWRSfSV7elCB7aqi1SnG4ywEGoq4ZOEIzadKe4zFXfPB+gYfMMubPp9IVR4NGjAgWTjJvYiAWm64ZyE4DcY7e4aFO1N6m4zVig6Dxg8JZzkHaTk+Z9iITCGnN9olNP5CMRatNEKefQTZv5V7MJobNpkEBEFAo7uVNGCkndTlOZGVDFbnQOQiEb6yPr9RMPBBARNeaOmw3UqXhJOlAkjWeUJNrahCx685MQxl7tjd5K6uRs+A7iq27tzJ6z2NEtZHAjXqA2XTgX7SFKtmzXQCy3O4cFzA3VYkeCcybM8xEto9SxdrCUZRtVhPlgM6vNT+ajA8yMm8POrSSl09JBpxm1XcRC+dGZ8A6L1gW0bsZ96ENhVsvb48FOGLM9sQlvgGp5wgnIOG2NcS3GtBPBeC+chNYHfoFMzCNEq33AU2HdenFnXasPat5Y0fJMhRkhzplTG0JvEBlnQLxJhu2xdB70RYbdcwTE62rsz1JCH8cyh2jGwcmMCXGe1+q03RnsO2zGswdE1lebhHV7iTH9NSM+Ou9XsxDDVsqu9nDiXaNBxqU6xIzTnkorAzLOPmZCiDWoOXHelQ8Gufl7IzSg26MnE5g3dZ8673cG5f05myrD5h4dj6RTvz2Be2r4wsXZCiBTd7sBUeFjzk2nSFlJSOCfj9p28w4PyGh3zI4OMOaeLyw2SEzu98Ju9gODzCDrzMhHm/9x/37WuEBoK+l61dVbVUHiR4XdtOOLsvKWtH7Y1ZtdBDGeJ7c6c1KNO/zyICEKFzAJkJo5ijJvQVD+sKmWwx4XxIQtJIB4DcKlCul+qZyKI19MDYS4mHjYnqwV/eXjx49tE2WsDf/8eTaxcV99EC0ohYQoFkp9P16JmL7PlwqplPxq8YQAJb9bXH6veKGU781mxGTCidqKZv//WTc9VexXG4nZtwnjb0uV76r9op/vJk0Xe8en2xclWVX53fAnhqfREBr12TQBlz7Z7Z/mq8q3XWyfHvfu0wF78SpCcxG+Sy0J3782cpaEm8HvY260kYtBtQ1wbfmvfypCpJaE70RLwvev/29Cv59tUUkH3U6kaTNjk+tK79SKEC3SHPLRqFx1YZ/h82wz0rl9T7GNdNtpDiknMj0mFN2MdN8BptSN0HOxGTipZgf/yR5vltTdYMyFT2/ADCblQWf4VtMhIKNs5DZQDuhAbpre0M0omWY3IJC3Ec+MZ4SMNokcmmQrKWJTWOkFJB/xtU9KGzjxVMghwVPM9Eo38fNNIJuYj1FAq+NU1+QlY5Qm3iMPhuT4FEVZsowdwnyyiJ24J6vpA6DcH1FVuDgksb4AQkXJ7Fa3q83GLX5IIM6R8O1ycoPIYu+Mkp98MiKNGxHXFif3wnvmnjSM+i+cp39IH1Y++K+VLXzR+OuW33SKVn7HBdgJBuCHD1t/YCIMRBtVtIWnKw6DYkJI+IoDUAqMBaGwOBs2OCbEY0QpSIBYeuIfASP03p2uBKkbwjFxxWvAbrBMCI3o9ezUa7BMCAm9Pn0vOKP9RF6HbrdBa6SeD4kB86SytrydlwpcN4SE3qbCvwePcOW/XgIGLKBRtPLBy7DmIICE3gZukUASejnmB9CVQkIvjxQOUPI7k6fBdzAJvYzb2K2V4MlTwm4kiPK/UmOppZZaaqmlllpqqaXc6n9agd5cZE2aOQAAAABJRU5ErkJggg=="} 
                    alt={newUser.gender === "man" 
                        ? "남자 이미지" 
                        : "여자 이미지"} 
                    />
                    <div>이름: {newUser.name}</div>
                    <div>나이: {newUser.age}</div>
                    <div>성별: {newUser.gender === "man" ? "남자" : "여자" }</div>
                    <div>{newUser.userState === "online" ? "🟢 온라인 상태입니다.": "🔴 오프라인 상태입니다."}</div>
                    <button onClick={() => deleteUser(newUser.id)}>삭제하기</button>
                </Card>
            ))}

            <Button onClick={() => {navigate("/user")}}>등록하기</Button>

        </Layout>
    )
}

export default UserList