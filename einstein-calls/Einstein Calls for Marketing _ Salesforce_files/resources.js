'undefined'===typeof Aura&&(Aura={});
(function() { 
	 function initAccessResources() {
			 $A.componentService.addModule('markup://force:customPerms', 'force/customPerms', ['exports'], null, {}); 
			 $A.componentService.addModule('markup://force:userPerms', 'force/userPerms', ['exports'], null, {EmailTemplateManagement: true,ExportReport: true,EditOppLineItemUnitPrice: true,ManageHubConnections: true,ManageContentProperties: true,GiveRecognitionBadge: true,DistributeFromPersWksp: true,SubmitMacrosAllowed: true,ViewAllUsers: true,ViewRoles: true,CreateWorkBadgeDefinition: true,ManageCustomReportTypes: true,ChatterEditOwnRecordPost: true,ManageIpAddresses: true,AIViewInsightObjects: true,ManageCustomPermissions: true,EmailSingle: true,ViewAllData: true,ManageAuthProviders: true,AuthorApex: true,TransferAnyLead: true,CreateCustomizeFilters: true,ActivateOrder: true,ManageRoles: true,EditTopics: true,ImportLeads: true,ManageMobile: true,FlowUFLRequired: true,ManageLoginAccessPolicies: true,EditPublicTemplates: true,OutboundMigrationToolsUser: true,BulkMacrosAllowed: true,LightningConsoleAllowedForUser: true,SolutionImport: true,ManageBusinessHourHolidays: true,EditHtmlTemplates: true,ScheduleReports: true,TransferAnyCase: true,ActivateContract: true,ManageForecastingCustomData: true,ViewAllForecasts: true,EnableNotifications: true,AddDirectMessageMembers: true,ChangeDashboardColors: true,EditEvent: true,InboundMigrationToolsUser: true,ViewAllProfiles: true,ScheduleJob: true,ManagePasswordPolicies: true,ManageContentTypes: true,ViewDeveloperName: true,MassInlineEdit: true,ViewEmailMessagingSetup: true,ConnectOrgToEnvironmentHub: true,CanInsertFeedSystemFields: true,ManageEmailClientConfig: true,ModifyMetadata: true,EditBrandTemplates: true,CreateDashboardFolders: true,SubscribeDashboardToOtherUsers: true,ManageExchangeConfig: true,ManageRecommendationStrategies: true,TransferAnyEntity: true,ExternalClientAppDeveloper: true,ShowCompanyNameAsUserBadge: true,FreezeUsers: true,ManageInteraction: true,ChatterEditOwnPost: true,SubscribeReportRolesGrps: true,ManageProfilesPermissionsets: true,ManageAnalyticSnapshots: true,NewReportBuilder: true,ManageDevSandboxes: true,ConvertLeads: true,EditReadonlyFields: true,ManageCMS: true,ViewSMSMessagingSetup: true,ManageReleaseUpdates: true,CreateCustomizeReports: true,ListEmailSend: true,ManageReportsInPubFolders: true,PrivacyDataAccess: true,Packaging2Delete: true,ExternalClientAppViewer: true,EnableCommunityAppLauncher: true,ViewHealthCheck: true,RunReports: true,ChatterOwnGroups: true,EditBillingInfo: true,ViewMyTeamsDashboards: true,ModifyAllData: true,ClientSecretRotation: true,ApiEnabled: true,CanUseNewDashboardBuilder: true,SubscribeToLightningReports: true,SelectFilesFromSalesforce: true,ChatterInternalUser: true,AssignPermissionSets: true,SubscribeReportToOtherUsers: true,EditMyDashboards: true,ManageSandboxes: true,ContentAdministrator: true,PublishPackaging: true,AssignTopics: true,DelegatedTwoFactor: true,TransactionalEmailSend: true,MergeTopics: true,UseWebLink: true,EmailAdministration: true,ManageDataCategories: true,EditPublicFilters: true,ManageRemoteAccess: true,OverrideForecasts: true,ManageTrustMeasures: true,ModerateChatter: true,EditActivatedOrders: true,ViewDataAssessment: true,ManageDynamicDashboards: true,DeleteTopics: true,LightningExperienceUser: true,ManageHealthCheck: true,ActivitiesAccess: true,EditMyReports: true,ViewClientSecret: true,ManageQuotas: true,EmailMass: true,ManageCategories: true,ManageInternalUsers: true,ViewTrustMeasures: true,ViewPublicDashboards: true,ManageUnlistedGroups: true,ManageSharing: true,ImportCustomObjects: true,ViewUserPII: true,SendCustomNotifications: true,EditPublicDocuments: true,ManageCallCenters: true,DataExport: true,CreatePackaging: true,ManageSMSMessagingSetup: true,DeleteActivatedContract: true,SubscribeDashboardRolesGrps: true,ManageDashbdsInPubFolders: true,ManageC360AConnections: true,CreateLtngTempFolder: true,ContentWorkspaces: true,ManagePropositions: true,RemoveDirectMessageMembers: true,CreateCustomizeDashboards: true,ConsentApiUpdate: true,ViewEventLogFiles: true,ManageMobileAppSecurity: true,ViewPublicReports: true,ManageContentPermissions: true,ViewDataCategories: true,ManageCases: true,CreateReportFolders: true,ApexRestServices: true,CanAccessCE: true,EditTask: true,ManageNetworks: true,ManageLeads: true,CreateTopics: true,ViewMLModels: true,ManageCertificates: true,UseTeamReassignWizards: true,ManageUsers: true,ChatterInviteExternalUsers: true,ViewSetup: true,MonitorLoginHistory: true,ExternalClientAppAdmin: true,Packaging2: true,SubscribeReportsRunAsUser: true,ImportPersonal: true,ManageSynonyms: true,CreateWorkspaces: true,ManageSolutions: true,ViewHelpLink: true,ModifyDataClassification: true,InstallPackaging: true,ManageSubscriptions: true,ShareFilesWithNetworks: true,CustomizeApplication: true,ChatterFileLink: true,ResetPasswords: true,ManagePvtRptsAndDashbds: true,CanVerifyComment: true,SubscribeToLightningDashboards: true,ManageOrchInstsAndWorkItems: true,ManagePreferenceCenter: true,SendSitRequests: true,EditCaseComments: true,ManageDataIntegrations: true,}); 
	 };
	 if(Aura.frameworkJsReady)initAccessResources();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initAccessResources)}
})(); 
Aura.StaticResourceMap = {
  "SiteSamples":{
    "":1724415118000
  }
};

(function() {
function initResourceGVP() {
if (!$A.getContext() || !$A.get('$Resource')) {
$A.addValueProvider('$Resource',
{
merge : function() {},
isStorable : function() { return false; },
get : function(resource) {
var modStamp, rel, abs, name, ns;
var nsDelim = resource.indexOf('__');
if (nsDelim >= 0) { ns = resource.substring(0, nsDelim); name = resource.substring(nsDelim + 2); } else { name = resource; }
var srMap = Aura.StaticResourceMap[name];
modStamp = srMap && srMap[ns = ns || Object.keys(srMap)[0]];
if (!modStamp) { return; }
rel = $A.get('$SfdcSite.pathPrefix');
abs = $A.get('$Absolute.url');
return [(abs || rel || ''), '/resource/', modStamp, '/', ns === '' ? name : ns + '__' + name].join('');
}
});
}
}
if(Aura.frameworkJsReady)initResourceGVP();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initResourceGVP)}
})();