import React, {useState} from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

export default function ConfigGenerator() {
    const [nodeInterface, setNodeInterface] = useState(0);
    const [interfaces, setInterfaces] = useState([]);

    const [nodeMgmtInterfaceIp, setNodeMgmtInterfaceIp] = useState();

    function range(start, end){
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    function maskCalculator(mask){
        if(mask == 24) return "255.255.255.0"
        else return "255.255.255.255"
    }

    // GLOBAL CONFIGURATION
    const [nodeType, setNodeType] = useState("physical");
    const [nodeVersion, setNodeVersion] = useState(8.5);
    const [nodeNote, setNodeNote] = useState(false)
    function onChange_NodeType(event){
        setNodeType(event.target.value)
    }
    function onChange_NodeVersion(event){
        setNodeVersion(event.target.value)
    }
    function onClick_NodeNote(event){
        setNodeNote(event.target.checked)
    }

    // BLOCK | BOOT CONFIGURATION
    const [nodeBootConfigFlagsTFTP, setNodeBootConfigFlagsTFTP] = useState(false)
    const [nodeBootConfigFlagsSSH, setNodeBootConfigFlagsSSH] = useState(false)
    function getBootConfiguration(){
        var data = "";
        var r = false;

        if(nodeBootConfigFlagsTFTP == true) r = true;
        if(nodeBootConfigFlagsSSH == true) r = true;
        if(nodeSPBM == true) r = true;

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# BOOT CONFIGURATION\n"
                data = data + "#\n"
            }
            if(nodeBootConfigFlagsTFTP == true) data = data + "boot config flags tftpd\n"
            if(nodeBootConfigFlagsSSH == true) data = data + "boot config flags sshd\n"
            if(nodeSPBM == true) data = data + "boot config flags spbm-config-mode\n"
            data = data + "\n"
            if(nodeNote == true){
                data = data + "#end boot flags\n"
                data = data + "\n"
            }
        }
        return data;
    }
    function onClick_BootConfigFlagsTFTP(event){
        setNodeBootConfigFlagsTFTP(event.target.checked)
    }
    function onClick_BootConfigFlagsSSH(event){
        setNodeBootConfigFlagsSSH(event.target.checked)
    }

    // BLOCK | SPBM CONFIGURATION
    const [nodeSPBM, setNodeSPBM] = useState(false)
    const [nodeSPBMInstance, setNodeSPBMInstance] = useState(0)
    const [nodeSPBMInstances, setNodeSPBMInstances] = useState([])
    function getSPBMConfiguration(){
        var data = "";
        var r = false;

        if(nodeSPBM == true) r = true

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# SPBM CONFIGURATION\n"
                data = data + "#\n"
            }
            data = data + "spbm\n"
            data = data + "spbm ethertype 0x8100\n"
            data = data + "\n"
        }
        return data;
    }
    function getISISSPBMConfiguration(){
        var data = "";
        var r = false;

        if(nodeSPBM == true) r = true

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# ISIS SPBM CONFIGURATION\n"
                data = data + "#\n"
            }
            data = data + "router isis\n"
            nodeSPBMInstances.map((i) => {
                data = data + "spbm "+ (i.id + 1) +" nick-name "+ i.nickname +"\n"
            })
            data = data + "exit\n"
            data = data + "\n"
        }
        return data;
    }
    function getISISConfiguration(){
        var data = "";
        var r = false;

        if(nodeSPBM == true) r = true

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# ISIS CONFIGURATION\n"
                data = data + "#\n"
            }
            data = data + "router isis\n"
            if(nodeName != "") data = data + "sys-name \""+ nodeName +"\"\n"
            data = data + "is-type l1\n"
            data = data + "exit\n"
            data = data + "\n"
        }
        return data;}
    function onClick_NodeSPBM(event){
        setNodeSPBM(event.target.checked)
    }
    function onClick_AddSPBMInstance(event){
        setNodeSPBMInstances([...nodeSPBMInstances, {
            id: nodeSPBMInstance,
            nickname: ""
        }])
        setNodeSPBMInstance(nodeSPBMInstance + 1)
    }
    function onChange_NodeSPBMInstanceNickName(event){
        var i = parseInt(event.target.dataset.instance)
        const newNodeSPBMInstance = [...nodeSPBMInstances]
        newNodeSPBMInstance[i] = nodeSPBMInstances[i]
        newNodeSPBMInstance[i].nickname = event.target.value
        setNodeSPBMInstances(nodeSPBMInstances)
    }

    // BLOCK | CLI CONFIGURATION
    const [nodeName, setNodeName] = useState("VSP-1");
    function getCLIConfiguration(){
        var data = "";
        var r = false;

        if(nodeName != "") r = true

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# CLI CONFIGURATION\n"
                data = data + "#\n"
            }
            if(nodeName != "") data = data + "prompt \""+ nodeName +"\"\n"
            data = data + "\n"
        }

        return data;
    }
    function onChange_NodeName(event){
        setNodeName(event.target.value)
    }

    // BLOCK | SSH CONFIGURATION
    function getSSHConfiguration(){
        var data = "";
        var r = false;

        if(nodeBootConfigFlagsSSH == true) r = true;

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# SSH CONFIGURATION\n"
                data = data + "#\n"
            }
            if(nodeBootConfigFlagsSSH == true) data = data + "ssh\n"
            data = data + "\n"
        }

        return data;
    }

    // BLOCK | PORT CONFIGURATION PHASE 1 & 2
    const [nodeInterfaceMgmt1IP, setNodeInterfaceMgmt1IP] = useState("")
    const [nodeInterfaceMgmt1Mask, setNodeInterfaceMgmt1Mask] = useState(24)
    function getPortConfigurationP1(){
        var data = "";
        var r = false;

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# PORT CONFIGURATION - PHASE I\n"
                data = data + "#\n"
            }
            data = data + "\n"
        }

        return data;
    }
    function getPortConfigurationP2(){
        var data = "";
        var r = false;

        if(nodeInterfaceMgmt1IP != "") r = true;

        if(r == true){
            if(nodeNote == true){
                data = data + "#\n"
                data = data + "# PORT CONFIGURATION - PHASE II\n"
                data = data + "#\n"
            }
            if(nodeInterfaceMgmt1IP != ""){
                data = data + "interface mgmtEthernet mgmt\n"
                data = data + "ip address "+ nodeInterfaceMgmt1IP + " " + maskCalculator(nodeInterfaceMgmt1Mask) + "\n"
                data = data + "exit\n"
            }
            data = data + "\n"
        }

        return data;
    }
    function onChange_NodeInterfaceMgmt1IP(event){
        setNodeInterfaceMgmt1IP(event.target.value)
    }
    function onChange_NodeInterfaceMgmt1Mask(event){
        setNodeInterfaceMgmt1Mask(event.target.value)
    }



    // OLD function
    function getInterfaceConfig(){
        var data = "";
        interfaces.map((i) => {
            data = data + "interface gigabitEthernet "+i.slot+"/"+ i.port +"\n";
            if(i.name != "") data = data + "name \""+ i.name +"\"\n";
            data = data + "isis\n";
            data = data + "isis spbm 1\n";
            data = data + "isis enable\n";
            data = data + "no spanning-tree mstp force-port-state enable\n";
            data = data + "y\n";
            data = data + "no shutdown\n";
            data = data + "exit\n";
            data = data + "\n";
        })
        return data;
    }

    function onClick_AddInterface(event){
        setInterfaces([...interfaces, {
            id: nodeInterface,
            slot: 1,
            port: 1,
            name: ""
        }])
        setNodeInterface(nodeInterface + 1)
    }

    function onClick_DeleteInterface(event){
        var i = parseInt(event.target.dataset.interface);
        setInterfaces(interfaces.filter((e) => (e.id != i)));
    }

    function onChange_InterfaceSlot(event){
        var i = parseInt(event.target.dataset.interface);
        const newInterface = [...interfaces];
        newInterface[i] = interfaces[i];
        newInterface[i].slot = parseInt(event.target.value);
        setInterfaces(newInterface);
    }

    function onChange_InterfacePort(event){
        var i = parseInt(event.target.dataset.interface);
        const newInterface = [...interfaces];
        newInterface[i] = interfaces[i];
        newInterface[i].port = parseInt(event.target.value);
        setInterfaces(newInterface);
    }

    function onChange_InterfaceName(event){
        var i = parseInt(event.target.dataset.interface);
        const newInterface = [...interfaces];
        newInterface[i] = interfaces[i];
        newInterface[i].name = event.target.value;
        setInterfaces(newInterface);
    }

    function onChange_MgmtInterfaceIP(event){
        setNodeMgmtInterfaceIp(event.target.value)
    }

    return (
        <div>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Node type :
                    </strong>
                </label>
                <select onChange={onChange_NodeType} className={clsx(styles.input, 'margin-right--sm')}>
                    <option value="physical">Physical</option>
                    <option value="virtual">Virtual</option>
                </select>{' '}
                <label>
                    <strong className="margin-right--sm">
                        Node version :
                    </strong>
                </label>
                <select onChange={onChange_NodeVersion} className={clsx(styles.input, 'margin-right--sm')}>
                    <option value="8.5">8.5.0.0</option>
                    <option value="8.4">8.4.3.0</option>
                    <option value="8.4">8.4.2.1</option>
                    <option value="8.4">8.4.1.1</option>
                    <option value="8.4">8.4.1.0</option>
                    <option value="8.3">8.3.1.0</option>
                    <option value="8.3">8.3.0.0</option>
                    <option value="8.2">8.2.8.0</option>
                    <option value="8.2">8.2.7.0</option>
                    <option value="8.2">8.2.6.0</option>
                    <option value="8.2">8.2.5.0</option>
                    <option value="8.2">8.2.0.0</option>
                    <option value="8.1">8.1.10.0</option>
                    <option value="8.1">8.1.9.0</option>
                    <option value="8.1">8.1.8.0</option>
                    <option value="8.1">8.1.7.0</option>
                    <option value="8.1">8.1.6.0</option>
                    <option value="8.1">8.1.5.0</option>
                    <option value="8.1">8.1.2.0</option>
                    <option value="8.1">8.1.1.0</option>
                    <option value="8.0">8.0.9.0</option>
                    <option value="8.0">8.0.8.0</option>
                    <option value="8.0">8.0.7.2</option>
                    <option value="8.0">8.0.7.1</option>
                    <option value="8.0">8.0.7.0</option>
                    <option value="8.0">8.0.6.1</option>
                    <option value="8.0">8.0.6.0</option>
                    <option value="8.0">8.0.5.1</option>
                    <option value="8.0">8.0.5.0</option>
                    <option value="8.0">8.0.1.0</option>
                    <option value="8.0">8.0.0.0</option>
                </select>{' '}
                <label>
                    <strong className="margin-right--sm">
                        Note :
                    </strong>
                </label>
                <input type="checkbox" onClick={onClick_NodeNote} className={clsx(styles.input, 'margin-right--sm')} checked={nodeNote} />
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Node name :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeName} className={clsx(styles.input, 'margin-right--sm')} value={nodeName} placeholder={ nodeName }/>{' '}
            </p>
            <p>
                <details>
                    <summary>Boot configuration</summary>
                    <p style={{marginLeft: 2 + 'em'}}>
                        <label>
                            <strong className="margin-right--sm">
                                TFTP
                            </strong>
                        </label>
                        <input type="checkbox" onClick={onClick_BootConfigFlagsTFTP} className={clsx(styles.input, 'margin-right--sm')} />{' '}
                        <label>
                            <strong className="margin-right--sm">
                                SSH
                            </strong>
                        </label>
                        <input type="checkbox" onClick={onClick_BootConfigFlagsSSH} className={clsx(styles.input, 'margin-right--sm')} />
                    </p>
                </details>
            </p>
            <p>
                <details>
                    <summary>Fabric SPBm</summary>
                    <p style={{marginLeft: 2 + 'em', marginTop: 1 + 'em'}}>
                        <label>
                            <strong className="margin-right--sm">
                                SPBm
                            </strong>
                        </label>
                        <input type="checkbox" onClick={onClick_NodeSPBM} className={clsx(styles.input, 'margin-right--sm')} />{' | '}
                        <button onClick={onClick_AddSPBMInstance} className={clsx(styles.button, 'margin-right--sm')}>Add interface</button>{' '}
                    </p>
                    <p style={{marginLeft: 2 + 'em'}}>
                        <details open>
                            <summary>ISIS / SPBm Configuration</summary>
                            <p style={{marginLeft: 2 + 'em'}}>
                                {nodeSPBMInstances.map(i =>
                                    <div>
                                        <details>
                                            <summary>SPBm { i.id + 1 }</summary>
                                            <p style={{marginLeft: 2 + 'em'}}>
                                                <label>
                                                    <strong className="margin-right--sm">
                                                        Nick-name :
                                                    </strong>
                                                </label>
                                                <input type="text" onChange={onChange_NodeSPBMInstanceNickName} className={clsx(styles.input, 'margin-right--sm')} data-instance={i.id} placeholder={"nick name"} />
                                            </p>
                                        </details>
                                    </div>
                                )}
                            </p>
                        </details>
                    </p>
                </details>
            </p>
            <p>
                <details>
                    <summary>Management interface</summary>
                    <p style={{marginLeft: 2 + 'em'}}>
                        <details>
                            <summary>MGMT1</summary>
                            <p style={{marginLeft: 2 + 'em'}}>
                                <label>
                                    <strong className="margin-right--sm">
                                        IP Address :
                                    </strong>
                                </label>
                                <input type="text" onChange={onChange_NodeInterfaceMgmt1IP} className={clsx(styles.input, 'margin-right--sm')} placeholder={"1.1.1.1"} />{' '}
                                <label>
                                    <strong className="margin-right--sm">
                                        Mask :
                                    </strong>
                                </label>
                                <select onChange={onChange_NodeInterfaceMgmt1Mask} className={clsx(styles.input, 'margin-right--sm')}>
                                    <option>-- mask --</option>
                                    {range(0,32).map(r =>
                                        <option value={r}>/{r}</option>
                                    )}
                                </select>
                            </p>
                        </details>
                    </p>
                </details>
            </p>
            <p>
                <button onClick={onClick_AddInterface} className={clsx(styles.button, 'margin-right--sm')}>Add interface</button><br/><br/>
                {interfaces.map(i =>
                    <div>
                        <h4>Configuration de l'interface { i.id }</h4>
                        <p style={{marginLeft: 2 + 'em'}}>
                            <label>
                                <strong className="margin-right--sm">
                                    Slot :
                                </strong>
                            </label>
                            <select onChange={onChange_InterfaceSlot} className={clsx(styles.input, 'margin-right--sm')} data-interface={i.id}>
                                {range(1,8).map(r =>
                                    <option value={r}>{r}</option>
                                )}
                            </select>{' '}
                            <label>
                                <strong className="margin-right--sm">
                                    Port :
                                </strong>
                            </label>
                            <select onChange={onChange_InterfacePort} className={clsx(styles.input, 'margin-right--sm')} data-interface={i.id}>
                                {range(1,128).map(r =>
                                    <option value={r}>{r}</option>
                                )}
                            </select>{' '}
                            <label>
                                <strong className="margin-right--sm">
                                    Name :
                                </strong>
                            </label>
                            <input type="text" onChange={onChange_InterfaceName} className={clsx(styles.input, 'margin-right--sm')} data-interface={i.id} placeholder={"name"} />
                        </p>
                        <p style={{textAlign: 'right'}}>
                            <button onClick={onClick_DeleteInterface} data-interface={i.id}>Delete</button>
                        </p>
                        <hr/>
                    </div>
                )}
            </p>

            <CodeBlock language="bash" title="Configuration">
                # Node type    : {nodeType}{"\n"}
                # Node version : {nodeVersion}{"\n"}
                {"\n"}
                enable{"\n"}
                config terminal{"\n"}
                {"\n"}
                {getBootConfiguration()}
                {getSPBMConfiguration()}
                {getCLIConfiguration()}
                {getSSHConfiguration()}
                {getPortConfigurationP1()}
                {getISISSPBMConfiguration()}
                {getPortConfigurationP2()}
                {getISISConfiguration()}
            </CodeBlock>
        </div>
    )

}