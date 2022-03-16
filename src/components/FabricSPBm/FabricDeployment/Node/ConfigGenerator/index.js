import React from "react";
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

function onChange_NodeType(event){
    node_type = event.target.value;
}

function onChange_NodeVersion(event){
    node_version = event.target.value;
}

function onChange_NodeName(event){
    node_version = event.target.value;
}

function onChange_NodeRole(event){
    node_role = event.target.value;
}

function onChange_NodeSite(event){
    node_site = event.target.value;
}

function onChange_NodeId(event){
    node_id = event.target.value;
}

function onChange_NodeArea(event){
    node_area = event.target.value;
}

function onChange_NodeSPBm(event){
    node_spbm = event.target.value;
}

function onChange_NodeSPBmPrimary(event){
    node_spbm_primary = event.target.value;
}

function onChange_NodeSPBmPrimary_Name(event){
    node_spbm_primary_name = event.target.value;
}

function onChange_NodeSPBmSecondary(event){
    node_spbm_secondary = event.target.value;
}

function onChange_NodeSPBmSecondary_Name(event){
    node_spbm_secondary_name = event.target.value;
}

function nodeChange(event){
    //node_id = event.target.value;
}

function updateConfig(){
    var inner = "" +
        "# Node type    : "+ node_type +"<br/>" +
        "# Node version : "+ node_version +"<br/>" +
        "<br/>" +
        "enable<br/>" +
        "config terminal<br/>" +
        "<br/>" +
        "sys name "+ node_name +"<br/>" +
        "<br/>" +
        "spbm <br/>" +
        "router isis<br/>" +
        "system-id 020"+ node_role +".0"+ node_site +"0.00"+ node_id +"<br/>" +
        "manual-area "+ node_area +"<br/>" +
        "spbm "+ node_spbm +"<br/>" +
        "spbm "+ node_spbm +" nick-name "+ node_role +"."+ node_site +"."+ node_id +"<br/>" +
        "spbm "+ node_spbm +" b-vid "+ node_spbm_primary +","+ node_spbm_secondary +" primary "+ node_spbm_primary +"<br/>" +
        "exit<br/>" +
        "vlan create "+ node_spbm_primary +" name "+ node_spbm_primary_name +" type spbm-bvlan<br/>" +
        "vlan create "+ node_spbm_secondary +" name "+ node_spbm_secondary_name +" type spbm-bvlan<br/>" +
        "router isis enable<br/>";

    if(node_version < "8.2") {
    } else if(node_version >= "8.2"){
    } else {
        var inner = "Configuration error";
    }

    document.getElementsByClassName("token")[0].innerHTML = inner;
}

export default function ConfigGenerator() {

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
                </select>

                <label>
                    <strong className="margin-right--sm">
                        Node version :
                    </strong>
                </label>
                <select onChange={onChange_NodeVersion} className={clsx(styles.input, 'margin-right--sm')}>
                    <option value="8.5" selected>8.5.0.0</option>
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
                </select>

                <label>
                    <strong className="margin-right--sm">
                        Node name :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeName} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_name }/>
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Node role :
                    </strong>
                </label>
                <select onChange={onChange_NodeRole} className={clsx(styles.input, 'margin-right--sm')}>
                    <option value="A">Access</option>
                    <option value="B">Backbone</option>
                    <option value="C" selected>Core</option>
                    <option value="D">Datacenter</option>
                    <option value="E">Edge</option>
                </select>

                <label>
                    <strong className="margin-right--sm">
                        Node site :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeSite} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_site } size="2"/>

                <label>
                    <strong className="margin-right--sm">
                        Node ID :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeId} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_id } size="2"/>
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Manual area :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeArea} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_area } size="7"/>

                <label>
                    <strong className="margin-right--sm">
                        SPBm instance :
                    </strong>
                </label>
                <input type="number" onChange={onChange_NodeSPBm} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_spbm } size="2"/>
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Primary BVLAN :
                    </strong>
                </label>
                <input type="number" onChange={onChange_NodeSPBmPrimary} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_spbm_primary } size="4"/>

                <label>
                    <strong className="margin-right--sm">
                        Primary BVLAN Name :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeSPBmPrimary_Name} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_spbm_primary_name } size="16"/>
            </p>
            <p>
                <label>
                    <strong className="margin-right--sm">
                        Secondary BVLAN :
                    </strong>
                </label>
                <input type="number" onChange={onChange_NodeSPBmSecondary} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_spbm_secondary } size="4"/>

                <label>
                    <strong className="margin-right--sm">
                        Secondary BVLAN Name :
                    </strong>
                </label>
                <input type="text" onChange={onChange_NodeSPBmSecondary_Name} className={clsx(styles.input, 'margin-right--sm')} placeholder={ node_spbm_secondary_name } size="16"/>
            </p>
            <p><button onClick={updateConfig}>Generate configuration</button></p>

            <CodeBlock language="jsx" title="Configuration">
                Please generate config
            </CodeBlock>
        </div>
    )

}