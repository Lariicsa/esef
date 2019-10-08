import React, { Component } from 'react';
import { MyContext } from '../../context';

import { VictoryChart, VictoryTheme, VictoryStack, VictoryArea } from 'victory'

export default function TheChart(studentData) {
    return (
        <div>
            <VictoryChart theme={VictoryTheme.material}>
                <VictoryStack>
                <VictoryBar
              data={studentData}
              x={"quarter"}
              y={"earnings"}
            />
                </VictoryStack>
            </VictoryChart>
        </div>
    )
}
