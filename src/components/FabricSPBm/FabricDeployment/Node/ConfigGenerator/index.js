import React, {useState} from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

var node_type                   = "physical";
var node_version                = 8.5;
var node_name                   = "VSPXXX";

var node_role                   = "C";
var node_site                   = "00";
var node_id                     = "01";

var node_area                   = "49.0000";
var node_spbm                   = 1;
var node_spbm_primary           = 4051;
var node_spbm_primary_name      = "BVLAN-4051";
var node_spbm_secondary         = 4052;
var node_spbm_secondary_name    = "BVLAN-4052";

export default function ConfigGenerator() {
    const [nodeType, setNodeType] = useState(node_type);
    const [nodeVersion, setNodeVersion] = useState(node_version);
    const [nodeName, setNodeName] = useState(node_name);

    const [nodeInterface, setNodeInterface] = useState(0);
    const [interfaces, setInterfaces] = useState([]);

    function range(start, end){
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    function onChange_NodeType(event){
        setNodeType(event.target.value)
    }

    function onChange_NodeVersion(event){
        setNodeVersion(event.target.value)
    }

    function onChange_NodeName(event){
        setNodeName(event.target.value)
    }

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

    return (
        <div>
            <p>&nbsp;</p>
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
                        Node name :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeName} className={clsx(styles.input, 'margin-right--sm')} value={nodeName} placeholder={ node_name }/>
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
                sys name {nodeName}{"\n"}
                {"\n"}
                spbm{"\n"}
                router isis{"\n"}
                system-id 020X.0YY0.00ZZ{"\n"}
                manual-area 49.0001{"\n"}
                spbm 1{"\n"}
                spbm 1 nick-name X.YY.ZZ{"\n"}
                spbm 1 b-vid 4051,4052 primary 4051{"\n"}
                exit{"\n"}
                {"\n"}
                vlan create 4051 name BVLAN-4051 type spbm-bvlan{"\n"}
                vlan create 4052 name BVLAN-4052 type spbm-bvlan{"\n"}
                {"\n"}
                router isis enable{"\n"}
                {"\n"}
                {getInterfaceConfig()}
            </CodeBlock>
        </div>
    )

}