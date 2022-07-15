import React, { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider'; 
import styled from 'styled-components';

import { ChevronIcon } from '../components/icons/Chevron';
import { MoreVertIcon } from '../components/icons/MoreVert';
import { PlayIcon } from '../components/icons/Play'
import { ForwardIcon } from '../components/icons/Forward';
import { ReplayIcon } from '../components/icons/Replay';

/*
const Background = styled.SafeAreaView`
    flex: 1;
    padding-top: 20px;
    backgroundColor: gray;
`;
*/

const Background = ({ children }) => {
    return(
        <LinearGradient
        colors={['#464769', '#1B1A1F']}
        style={{
            flex: 1,
            paddingTop: 30,
        }}>
        { children }
        </LinearGradient>
    );
}



const TopBar = styled.SafeAreaView`
    flex-direction: row;
`;

TopBar.Left = styled.View`
    flex: 1;
    padding-left: 16px;
`;
TopBar.Middle = styled.View`
    flex: 2;
    align-items: center;
`;
TopBar.Right = styled.View`
    flex: 1;
    padding-right: 16px;
    align-items: flex-end;
`;

TopBar.Title = styled.Text`
    text-transform: uppercase;
    color: white;
`;

TopBar.SubTitle = styled.Text`
    color: white;
    font-weight: bold;
`;

// ========================================

const ScreenArea = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
`;

const CoverArea = styled.View`
    flex: 4;
`;

CoverArea.Image = styled.Image`
    width: 100%;
    flex:1;
`;

const PlayerArea = styled.View`
    flex: 2;
    justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
    color: white;
    fontSize: 22px;
    font-weight: bold;
`;

PlayerArea.Author = styled.Text`
    color: #BBB;
    fontSize: 14px;
`;

const Controls = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity`
`;

Controls.Slider = styled.View`
    flex-basis: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

Controls.Slider.CurrentTime = styled.Text`
    color: #BBB;
`;
Controls.Slider.TotalTime = styled.Text`
    color: #BBB;
`;

const AudioSlider = styled(Slider)`
    flex-basis: 100%;
`;

export default function PlayerScreen() {
    const [segundos, setSegundos] = useState(0);
    return (
        <Background >
            <TopBar>
                <TopBar.Left>
                    <ChevronIcon/>
                </TopBar.Left>
                
                <TopBar.Middle>
                    <TopBar.Title>Tocando Podcast</TopBar.Title>
                    <TopBar.SubTitle>Hipsters Ponto Tech</TopBar.SubTitle>
                </TopBar.Middle>

                <TopBar.Right>
                    <MoreVertIcon />
                </TopBar.Right>
            </TopBar>

            <ScreenArea>
                <CoverArea>
                    <CoverArea.Image
                    resizeMode="contain"
                    source={{
                        uri: "https://place-hold.it/750x750",
                    }}
                    />
                </CoverArea>

                <PlayerArea>
                    <PlayerArea.Title> 
                        Angular vs React - Hipsters #142 
                    </PlayerArea.Title>
                    <PlayerArea.Author>
                        Hipsters Ponto Tech
                    </PlayerArea.Author>

                    <Controls>
                        <Controls.Slider>
                            <AudioSlider
                                thumbTintColor='#FFF'
                                maximumTrackTintColor='#777' 
                                minimumTrackTintColor='#1DD65F'
                                minimumValue={0}
                                maximumValue={100}
                                value={segundos}
                                onValueChange={(value) => {
                                    setSegundos(value)
                                }}
                            /> 
                            <Controls.Slider.CurrentTime>
                                {segundos}
                            </Controls.Slider.CurrentTime>
                            <Controls.Slider.TotalTime>
                                52:07
                            </Controls.Slider.TotalTime>
                        </Controls.Slider>

                        <Controls.Play>
                            <ForwardIcon 
                                width={44}
                                height={44}
                            />
                        </Controls.Play>
                        <Controls.Play>
                            <PlayIcon 
                                width={88}
                                height={88}
                            />
                        </Controls.Play>
                        <Controls.Play>
                            <ReplayIcon
                                width={44}
                                height={44}
                            />
                        </Controls.Play>
                    </Controls>
                </PlayerArea>

            </ScreenArea>
        </Background>
      );
}

