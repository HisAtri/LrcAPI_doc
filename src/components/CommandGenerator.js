// src/components/CommandGenerator.js
import React, { useState } from 'react';

const CommandGenerator = () => {
    const [deploymentMethod, setDeploymentMethod] = useState('cli');
    const [port, setPort] = useState('');
    const [password, setPassword] = useState('');
    const [volumes, setVolumes] = useState([{ container: '', host: '' }]);
    const [command, setCommand] = useState('');

    const addVolume = () => {
        setVolumes([...volumes, { container: '', host: '' }]);
    };

    const removeVolume = () => {
        if (volumes.length > 1) {
            const newVolumes = [...volumes];
            newVolumes.pop();
            setVolumes(newVolumes);
        }
    };

    const handleVolumeChange = (index, field, value) => {
        const newVolumes = [...volumes];
        newVolumes[index][field] = value;
        setVolumes(newVolumes);
    };

    const generateCommand = () => {
        let generatedCommand = '';

        if (deploymentMethod === 'cli') {
            generatedCommand = './lrcapi';
            if (port) generatedCommand += ` --port ${port}`;
            if (password) generatedCommand += ` --auth ${password}`;
        } else if (deploymentMethod === 'docker') {
            generatedCommand = 'docker run -d';
            if (port) generatedCommand += ` -p ${port}:28883`;
            else generatedCommand += ' -p 28883:28883';
            if (password) generatedCommand += ` -e API_AUTH=${password}`;
            volumes.forEach(volume => {
                if (volume.container && volume.host) {
                    generatedCommand += ` -v ${volume.host}:${volume.container}`;
                }
            });
            generatedCommand += ' hisatri/lrcapi:latest';
        } else if (deploymentMethod === 'docker-compose') {
            generatedCommand = `version: '3'\nservices:\n  lrcapi:\n    image: hisatri/lrcapi:latest\n`;
            if (port) generatedCommand += `    ports:\n      - "${port}:28883"\n`;
            else generatedCommand += `    ports:\n      - "28883:28883"\n`;
            if (password) generatedCommand += `    environment:\n      - API_AUTH=${password}\n`;
            const validVolumes = volumes.filter(volume => volume.container && volume.host);
            if (validVolumes.length > 0) {
                generatedCommand += `    volumes:\n`;
                validVolumes.forEach(volume => {
                    generatedCommand += `      - ${volume.host}:${volume.container}\n`;
                });
            }
        }

        setCommand(generatedCommand);
    };

    return (
        <div className="card" style={{ padding: '20px' }}>
            <h3 className="card__title">Command Generator</h3>
            <div className="card__body">
                <label style={{ display: 'block', marginBottom: '15px' }}>
                    你采用的部署方式是：
                    <select
                        value={deploymentMethod}
                        onChange={(e) => setDeploymentMethod(e.target.value)}
                        style={{ border: '1px solid gray', borderRadius: '6px', height: '30px'}}
                    >
                        <option value="cli">命令行</option>
                        <option value="docker">Docker</option>
                        <option value="docker-compose">Docker-compose</option>
                    </select>
                </label>
                <label style={{ display: 'block', marginBottom: '15px' }}>
                    是否更改默认的端口（默认端口为28883）：
                    <input
                        type="text"
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        style={{ border: '1px solid gray', borderRadius: '6px', height: '30px', padding: '10px' }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '15px' }}>
                    为API设置密码（留空即不设置）：
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ border: '1px solid gray', borderRadius: '6px', height: '30px', padding: '10px' }}
                    />
                </label>
                {(deploymentMethod === 'docker' || deploymentMethod === 'docker-compose') && (
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '10px' }}>
                            设置目录映射：
                        </label>
                        {volumes.map((volume, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                <input
                                    type="text"
                                    value={volume.host}
                                    onChange={(e) => handleVolumeChange(index, 'host', e.target.value)}
                                    placeholder="主机目录"
                                    style={{
                                        border: '1px solid gray',
                                        borderRadius: '6px',
                                        height: '30px',
                                        padding: '10px',
                                        marginLeft: '10px',
                                        marginRight: '10px'
                                    }}
                                />
                                <span>:</span>
                                <input
                                    type="text"
                                    value={volume.container}
                                    onChange={(e) => handleVolumeChange(index, 'container', e.target.value)}
                                    placeholder="容器内目录"
                                    style={{
                                        border: '1px solid gray',
                                        borderRadius: '6px',
                                        height: '30px',
                                        padding: '10px',
                                        marginLeft: '10px',
                                        marginRight: '10px'
                                    }}
                                />
                            </div>
                        ))}
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <button onClick={addVolume} className="button button--secondary"
                                    style={{marginRight: '10px'}}>
                                +
                            </button>
                            <button onClick={removeVolume} className="button button--secondary">
                                -
                            </button>
                        </div>
                    </div>
                )}
                <button onClick={generateCommand} className="button button--primary">
                    生成命令
                </button>
                <div className="margin-top--md">
                    <h4>Generated Command:</h4>
                    <pre>{command}</pre>
                </div>
            </div>
        </div>
    );
};

export default CommandGenerator;
