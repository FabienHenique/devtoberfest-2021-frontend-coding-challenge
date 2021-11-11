/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library","../library"],function(t,e){"use strict";var a=t.Categories,i=t.Severity,s=t.Audiences;var o={id:"avatarWithCustomDisplaySize",title:"Avatar: Invalid combination of customDisplaySize and displaySize properties",minversion:"1.46",audiences:[s.Application],categories:[a.Usage],description:"Avatar customDisplaySize property takes affect, only when displaySize property is set to Custom.",resolution:"Set displaySize property to Custom",check:function(t,a,s){s.getElementsByClassName("sap.f.Avatar").forEach(function(a){var s=a.getId(),o=a.getMetadata().getElementName(),r=a.getCustomDisplaySize()===a.getMetadata().getProperty("customDisplaySize").getDefaultValue();if(!r&&a.getDisplaySize()!==e.AvatarSize.Custom){t.addIssue({severity:i.Medium,details:"Avatar '"+o+"' ("+s+") has customDisplaySize property, without setting displaySize to Custom",context:{id:s}})}})}};var r={id:"avatarWithCustomFontSize",title:"Avatar: Invalid combination of customFontSize and displaySize properties",minversion:"1.46",audiences:[s.Application],categories:[a.Usage],description:"Avatar customFontSize property takes affect, only when displaySize property is set to Custom.",resolution:"Set displaySize property to Custom",check:function(t,a,s){s.getElementsByClassName("sap.f.Avatar").forEach(function(a){var s=a.getId(),o=a.getMetadata().getElementName(),r=a.getCustomFontSize()===a.getMetadata().getProperty("customFontSize").getDefaultValue();if(!r&&a.getDisplaySize()!==e.AvatarSize.Custom){t.addIssue({severity:i.Medium,details:"Avatar '"+o+"' ("+s+") has customFontSize property, without setting displaySize to Custom",context:{id:s}})}})}};return[o,r]},true);