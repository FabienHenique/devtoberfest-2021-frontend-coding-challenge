/*
 * ! OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Element"],function(e,l){"use strict";var t=l.extend("sap.m.P13nItem",{metadata:{library:"sap.m",properties:{columnKey:{type:"string",group:"Data",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:""},visible:{type:"boolean",group:"Misc",defaultValue:null},type:{type:"string",group:"Misc",defaultValue:"text"},typeInstance:{type:"object",group:"Misc",defaultValue:null,since:"1.56"},precision:{type:"string",group:"Misc",defaultValue:null},formatSettings:{type:"object",group:"Misc",defaultValue:null,since:"1.52"},scale:{type:"string",group:"Misc",defaultValue:null},maxLength:{type:"string",group:"Misc",defaultValue:null},width:{type:"string",group:"Misc",defaultValue:null},isDefault:{type:"boolean",group:"Misc",defaultValue:false},values:{type:"string[]",group:"Misc",defaultValue:null},role:{type:"string",defaultValue:null},aggregationRole:{type:"string",defaultValue:null},href:{type:"string",defaultValue:null},target:{type:"string",defaultValue:null},press:{type:"object",defaultValue:null},description:{type:"string",defaultValue:null},nullable:{type:"boolean",group:"Misc",defaultValue:false}}}});return t});