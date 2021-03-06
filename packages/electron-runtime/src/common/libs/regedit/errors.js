const errors = {};

errors[25121] = new Error('missing arguments');
errors[25121].code = 25121;

errors[25122] = new Error('unsupported hive');
errors[25122].code = 25122;

errors[25123] = new Error(
  'expected to have groups of 4 arguments for each value that is written to the registry',
);
errors[25123].code = 25123;

errors[25124] = new Error(
  'missing or invalid architecture from arguments, use "A" (agnostic), "S" (specific), "32" or "64"',
);
errors[25124].code = 25124;

errors[25125] = new Error(
  'missing OSArchitecture global. Forgot to load util.vbs? submit an issue asap with steps to recreate',
);
errors[25125].code = 25125;

errors[25126] = new Error('invalid os architecture detected');
errors[25126].code = 25126;

errors[25127] = new Error('empty line written to vbscript stdin');
errors[25127].code = 25127;

// TODO: this is an error that is caused by trying to create a registry key somewhere I dont have permissions to
// where is the reference for these codes....???
errors[5] = new Error('access is denied');
errors[5].code = 5;

errors[2] = new Error('registry path does not exist');
errors[2].code = 2;

// *** generated errors ***//
const e0 = new Error('wbemErrFailed');
e0.description = 'The call failed.';
e0.code = 2147749889;
errors[2147749889] = e0;
const e1 = new Error('wbemErrNotFound');
e1.description = 'The object could not be found.';
e1.code = 2147749890;
errors[2147749890] = e1;
const e2 = new Error('wbemErrAccessDenied');
e2.description =
  'The current user does not have permission to perform the action.';
e2.code = 2147749891;
errors[2147749891] = e2;
const e3 = new Error('wbemErrProviderFailure');
e3.description =
  'The provider has failed at some time other than during initialization.';
e3.code = 2147749892;
errors[2147749892] = e3;
const e4 = new Error('wbemErrTypeMismatch');
e4.description = 'A type mismatch occurred.';
e4.code = 2147749893;
errors[2147749893] = e4;
const e5 = new Error('wbemErrOutOfMemory');
e5.description = 'There was not enough memory for the operation.';
e5.code = 2147749894;
errors[2147749894] = e5;
const e6 = new Error('wbemErrInvalidContext');
e6.description = 'The SWbemNamedValue object is not valid.';
e6.code = 2147749895;
errors[2147749895] = e6;
const e7 = new Error('wbemErrInvalidParameter');
e7.description = 'One of the parameters to the call is not correct.';
e7.code = 2147749896;
errors[2147749896] = e7;
const e8 = new Error('wbemErrNotAvailable');
e8.description =
  'The resource, typically a remote server, is not currently available.';
e8.code = 2147749897;
errors[2147749897] = e8;
const e9 = new Error('wbemErrCriticalError');
e9.description =
  'An internal, critical, and unexpected error occurred. Report this error to Microsoft Technical Support.';
e9.code = 2147749898;
errors[2147749898] = e9;
const e10 = new Error('wbemErrInvalidStream');
e10.description =
  'One or more network packets were corrupted during a remote session.';
e10.code = 2147749899;
errors[2147749899] = e10;
const e11 = new Error('wbemErrNotSupported');
e11.description = 'The feature or operation is not supported.';
e11.code = 2147749900;
errors[2147749900] = e11;
const e12 = new Error('wbemErrInvalidSuperclass');
e12.description = 'The parent class specified is not valid.';
e12.code = 2147749901;
errors[2147749901] = e12;
const e13 = new Error('wbemErrInvalidNamespace');
e13.description = 'The namespace specified could not be found.';
e13.code = 2147749902;
errors[2147749902] = e13;
const e14 = new Error('wbemErrInvalidObject');
e14.description = 'The specified instance is not valid.';
e14.code = 2147749903;
errors[2147749903] = e14;
const e15 = new Error('wbemErrInvalidClass');
e15.description = 'The specified class is not valid.';
e15.code = 2147749904;
errors[2147749904] = e15;
const e16 = new Error('wbemErrProviderNotFound');
e16.description =
  'A provider referenced in the schema does not have a corresponding registration.';
e16.code = 2147749905;
errors[2147749905] = e16;
const e17 = new Error('wbemErrInvalidProviderRegistration');
e17.description =
  'A provider referenced in the schema has an incorrect or incomplete registration. This error may be caused by a missing pragma namespace command in the MOF file used to register the provider, resulting in the provider being registered in the wrong WMI namespace. This error may also be caused by a corrupt repository, which may be fixed by deleting it and recompiling the MOF files.';
e17.code = 2147749906;
errors[2147749906] = e17;
const e18 = new Error('wbemErrProviderLoadFailure');
e18.description =
  'COM cannot locate a provider referenced in the schema. This error may be caused by any of the following:';
e18.code = 2147749907;
errors[2147749907] = e18;
const e19 = new Error('wbemErrInitializationFailure');
e19.description =
  'A component, such as a provider, failed to initialize for internal reasons.';
e19.code = 2147749908;
errors[2147749908] = e19;
const e20 = new Error('wbemErrTransportFailure');
e20.description = 'A networking error occurred, preventing normal operation.';
e20.code = 2147749909;
errors[2147749909] = e20;
const e21 = new Error('wbemErrInvalidOperation');
e21.description =
  'The requested operation is not valid. This error usually applies to invalid attempts to delete classes or properties.';
e21.code = 2147749910;
errors[2147749910] = e21;
const e22 = new Error('wbemErrInvalidQuery');
e22.description =
  'The requested operation is not valid. This error usually applies to invalid attempts to delete classes or properties.';
e22.code = 2147749911;
errors[2147749911] = e22;
const e23 = new Error('wbemErrInvalidQueryType');
e23.description = 'The requested query language is not supported.';
e23.code = 2147749912;
errors[2147749912] = e23;
const e24 = new Error('wbemErrAlreadyExists');
e24.description =
  'In a put operation, the wbemChangeFlagCreateOnly flag was specified, but the instance already exists.';
e24.code = 2147749913;
errors[2147749913] = e24;
const e25 = new Error('wbemErrOverrideNotAllowed');
e25.description =
  'It is not possible to perform the add operation on this qualifier because the owning object does not permit overrides.';
e25.code = 2147749914;
errors[2147749914] = e25;
const e26 = new Error('wbemErrPropagatedQualifier');
e26.description =
  'The user attempted to delete a qualifier that was not owned. The qualifier was inherited from a parent class.';
e26.code = 2147749915;
errors[2147749915] = e26;
const e27 = new Error('wbemErrPropagatedProperty');
e27.description =
  'The user attempted to delete a property that was not owned. The property was inherited from a parent class.';
e27.code = 2147749916;
errors[2147749916] = e27;
const e28 = new Error('wbemErrUnexpected');
e28.description =
  'The client made an unexpected and illegal sequence of calls, such as calling EndEnumeration before calling BeginEnumeration.';
e28.code = 2147749917;
errors[2147749917] = e28;
const e29 = new Error('wbemErrIllegalOperation');
e29.description =
  'The user requested an illegal operation, such as spawning a class from an instance.';
e29.code = 2147749918;
errors[2147749918] = e29;
const e30 = new Error('wbemErrCannotBeKey');
e30.description =
  'There was an illegal attempt to specify a key qualifier on a property that cannot be a key. The keys are specified in the class definition for an object, and cannot be altered on a per-instance basis.';
e30.code = 2147749919;
errors[2147749919] = e30;
const e31 = new Error('wbemErrIncompleteClass');
e31.description =
  'The current object is not a valid class definition. Either it is incomplete, or it has not been registered with WMI using SWbemObject.Put_.';
e31.code = 2147749920;
errors[2147749920] = e31;
const e32 = new Error('wbemErrInvalidSyntax');
e32.description =
  'The syntax of an input parameter is incorrect for the applicable data structure. For example, when a CIM datetime structure does not have the correct format when passed to SWbemDateTime.SetFileTime.';
e32.code = 2147749921;
errors[2147749921] = e32;
const e33 = new Error('wbemErrNondecoratedObject');
e33.description = 'Reserved for future use.';
e33.code = 2147749922;
errors[2147749922] = e33;
const e34 = new Error('wbemErrReadOnly');
e34.description =
  'The property that you are attempting to modify is read-only.';
e34.code = 2147749923;
errors[2147749923] = e34;
const e35 = new Error('wbemErrProviderNotCapable');
e35.description =
  'The provider cannot perform the requested operation. This would include a query that is too complex, retrieving an instance, creating or updating a class, deleting a class, or enumerating a class.';
e35.code = 2147749924;
errors[2147749924] = e35;
const e36 = new Error('wbemErrClassHasChildren');
e36.description =
  'An attempt was made to make a change that would invalidate a subclass.';
e36.code = 2147749925;
errors[2147749925] = e36;
const e37 = new Error('wbemErrClassHasInstances');
e37.description =
  'An attempt has been made to delete or modify a class that has instances.';
e37.code = 2147749926;
errors[2147749926] = e37;
const e38 = new Error('wbemErrQueryNotImplemented');
e38.description = 'Reserved for future use.';
e38.code = 2147749927;
errors[2147749927] = e38;
const e39 = new Error('wbemErrIllegalNull');
e39.description =
  'A value of Nothing was specified for a property that may not be Nothing, such as one that is marked by a Key, Indexed, or Not_Null qualifier.';
e39.code = 2147749928;
errors[2147749928] = e39;
const e40 = new Error('wbemErrInvalidQualifierType');
e40.description = 'The CIM type specified for a property is not valid.';
e40.code = 2147749929;
errors[2147749929] = e40;
const e41 = new Error('wbemErrInvalidPropertyType');
e41.description = 'The CIM type specified for a property is not valid.';
e41.code = 2147749930;
errors[2147749930] = e41;
const e42 = new Error('wbemErrValueOutOfRange');
e42.description =
  'The request was made with an out-of-range value, or is incompatible with the type.';
e42.code = 2147749931;
errors[2147749931] = e42;
const e43 = new Error('wbemErrCannotBeSingleton');
e43.description =
  'An illegal attempt was made to make a class singleton, such as when the class is derived from a non-singleton class.';
e43.code = 2147749932;
errors[2147749932] = e43;
const e44 = new Error('wbemErrInvalidCimType');
e44.description = 'The CIM type specified is not valid.';
e44.code = 2147749933;
errors[2147749933] = e44;
const e45 = new Error('wbemErrInvalidMethod');
e45.description = 'The requested method is not available.';
e45.code = 2147749934;
errors[2147749934] = e45;
const e46 = new Error('wbemErrInvalidMethodParameters');
e46.description = 'The parameters provided for the method are not valid.';
e46.code = 2147749935;
errors[2147749935] = e46;
const e47 = new Error('wbemErrSystemProperty');
e47.description =
  'There was an attempt to get qualifiers on a system property.';
e47.code = 2147749936;
errors[2147749936] = e47;
const e48 = new Error('wbemErrInvalidProperty');
e48.description = 'The property type is not recognized.';
e48.code = 2147749937;
errors[2147749937] = e48;
const e49 = new Error('wbemErrCallCancelled');
e49.description =
  'An asynchronous process has been canceled internally or by the user. Note that due to the timing and nature of the asynchronous operation the operation may not have been truly canceled.';
e49.code = 2147749938;
errors[2147749938] = e49;
const e50 = new Error('wbemErrShuttingDown');
e50.description =
  'The user has requested an operation while WMI is in the process of shutting down.';
e50.code = 2147749939;
errors[2147749939] = e50;
const e51 = new Error('wbemErrPropagatedMethod');
e51.description =
  'An attempt was made to reuse an existing method name from a parent class, and the signatures did not match.';
e51.code = 2147749940;
errors[2147749940] = e51;
const e52 = new Error('wbemErrUnsupportedParameter');
e52.description =
  'One or more parameter values, such as a query text, is too complex or unsupported. WMI is therefore requested to retry the operation with simpler parameters.';
e52.code = 2147749941;
errors[2147749941] = e52;
const e53 = new Error('wbemErrMissingParameter');
e53.description = 'A parameter was missing from the method call.';
e53.code = 2147749942;
errors[2147749942] = e53;
const e54 = new Error('wbemErrInvalidParameterId');
e54.description = 'A method parameter has an ID qualifier that is not valid.';
e54.code = 2147749943;
errors[2147749943] = e54;
const e55 = new Error('wbemErrNonConsecutiveParameterIds');
e55.description =
  'One or more of the method parameters have ID qualifiers that are out of sequence.';
e55.code = 2147749944;
errors[2147749944] = e55;
const e56 = new Error('wbemErrParameterIdOnRetval');
e56.description = 'The return value for a method has an ID qualifier.';
e56.code = 2147749945;
errors[2147749945] = e56;
const e57 = new Error('wbemErrInvalidObjectPath');
e57.description = 'The specified object path was not valid.';
e57.code = 2147749946;
errors[2147749946] = e57;
const e58 = new Error('wbemErrOutOfDiskSpace');
e58.description =
  'Windows Server 2003:  Disk is out of space or the 4 GB limit on WMI repository (CIM repository) size is reached.';
e58.code = 2147749947;
errors[2147749947] = e58;
const e59 = new Error('wbemErrBufferTooSmall');
e59.description =
  'The supplied buffer was too small to hold all the objects in the enumerator or to read a string property.';
e59.code = 2147749948;
errors[2147749948] = e59;
const e60 = new Error('wbemErrUnsupportedPutExtension');
e60.description = 'The provider does not support the requested put operation.';
e60.code = 2147749949;
errors[2147749949] = e60;
const e61 = new Error('wbemErrUnknownObjectType');
e61.description =
  'An object with an incorrect type or version was encountered during marshaling.';
e61.code = 2147749950;
errors[2147749950] = e61;
const e62 = new Error('wbemErrUnknownPacketType');
e62.description =
  'A packet with an incorrect type or version was encountered during marshaling.';
e62.code = 2147749951;
errors[2147749951] = e62;
const e63 = new Error('wbemErrMarshalVersionMismatch');
e63.description = 'The packet has an unsupported version.';
e63.code = 2147749952;
errors[2147749952] = e63;
const e64 = new Error('wbemErrMarshalInvalidSignature');
e64.description = 'The packet appears to be corrupted.';
e64.code = 2147749953;
errors[2147749953] = e64;
const e65 = new Error('wbemErrInvalidQualifier');
e65.description =
  'An attempt has been made to mismatch qualifiers, such as putting [key] on an object instead of a property.';
e65.code = 2147749954;
errors[2147749954] = e65;
const e66 = new Error('wbemErrInvalidDuplicateParameter');
e66.description = 'A duplicate parameter has been declared in a CIM method.';
e66.code = 2147749955;
errors[2147749955] = e66;
const e67 = new Error('wbemErrTooMuchData');
e67.description = 'Reserved for future use.';
e67.code = 2147749956;
errors[2147749956] = e67;
const e68 = new Error('wbemErrServerTooBusy');
e68.description =
  'A call to IWbemObjectSink::Indicate has failed. The provider may choose to refire the event.';
e68.code = 2147749957;
errors[2147749957] = e68;
const e69 = new Error('wbemErrInvalidFlavor');
e69.description = 'The specified flavor was not valid.';
e69.code = 2147749958;
errors[2147749958] = e69;
const e70 = new Error('wbemErrCircularReference');
e70.description =
  'An attempt has been made to create a reference that is circular (for example, deriving a class from itself).';
e70.code = 2147749959;
errors[2147749959] = e70;
const e71 = new Error('wbemErrUnsupportedClassUpdate');
e71.description = 'The specified class is not supported.';
e71.code = 2147749960;
errors[2147749960] = e71;
const e72 = new Error('wbemErrCannotChangeKeyInheritance');
e72.description =
  'An attempt was made to change a key when instances or subclasses are already using the key.';
e72.code = 2147749961;
errors[2147749961] = e72;
const e73 = new Error('wbemErrCannotChangeIndexInheritance');
e73.description =
  'An attempt was made to change an index when instances or subclasses are already using the index.';
e73.code = 2147749968;
errors[2147749968] = e73;
const e74 = new Error('wbemErrTooManyProperties');
e74.description =
  'An attempt was made to create more properties than the current version of the class supports.';
e74.code = 2147749969;
errors[2147749969] = e74;
const e75 = new Error('wbemErrUpdateTypeMismatch');
e75.description =
  'A property was redefined with a conflicting type in a derived class.';
e75.code = 2147749970;
errors[2147749970] = e75;
const e76 = new Error('wbemErrUpdateOverrideNotAllowed');
e76.description =
  'An attempt was made in a derived class to override a non-overrideable qualifier.';
e76.code = 2147749971;
errors[2147749971] = e76;
const e77 = new Error('wbemErrUpdatePropagatedMethod');
e77.description =
  'A method was redeclared with a conflicting signature in a derived class.';
e77.code = 2147749972;
errors[2147749972] = e77;
const e78 = new Error('wbemErrMethodNotImplemented');
e78.description =
  'An attempt was made to execute a method not marked with [implemented] in any relevant class.';
e78.code = 2147749973;
errors[2147749973] = e78;
const e79 = new Error('wbemErrMethodDisabled');
e79.description =
  'An attempt was made to execute a method marked with [disabled].';
e79.code = 2147749974;
errors[2147749974] = e79;
const e80 = new Error('wbemErrRefresherBusy');
e80.description = 'The refresher is busy with another operation.';
e80.code = 2147749975;
errors[2147749975] = e80;
const e81 = new Error('wbemErrUnparsableQuery');
e81.description = 'The filtering query is syntactically not valid.';
e81.code = 2147749976;
errors[2147749976] = e81;
const e82 = new Error('wbemErrNotEventClass');
e82.description =
  'The FROM clause of a filtering query references a class that is not an event class (not derived from __Event).';
e82.code = 2147749977;
errors[2147749977] = e82;
const e83 = new Error('wbemErrMissingGroupWithin');
e83.description =
  'A GROUP BY clause was used without the corresponding GROUP WITHIN clause.';
e83.code = 2147749978;
errors[2147749978] = e83;
const e84 = new Error('wbemErrMissingAggregationList');
e84.description =
  'A GROUP BY clause was used. Aggregation on all properties is not supported.';
e84.code = 2147749979;
errors[2147749979] = e84;
const e85 = new Error('wbemErrPropertyNotAnObject');
e85.description =
  'Dot notation was used on a property that is not an embedded object.';
e85.code = 2147749980;
errors[2147749980] = e85;
const e86 = new Error('wbemErrAggregatingByObject');
e86.description =
  'A GROUP BY clause references a property that is an embedded object without using dot notation.';
e86.code = 2147749981;
errors[2147749981] = e86;
const e87 = new Error('wbemErrUninterpretableProviderQuery');
e87.description =
  'An event provider registration query ( __EventProviderRegistration) did not specify the classes for which events were provided.';
e87.code = 2147749983;
errors[2147749983] = e87;
const e88 = new Error('wbemErrBackupRestoreWinmgmtRunning');
e88.description =
  'An request was made to back up or restore the repository while WMI was using it.';
e88.code = 2147749984;
errors[2147749984] = e88;
const e89 = new Error('wbemErrQueueOverflow');
e89.description =
  'The asynchronous delivery queue overflowed due to the event consumer being too slow.';
e89.code = 2147749985;
errors[2147749985] = e89;
const e90 = new Error('wbemErrPrivilegeNotHeld');
e90.description =
  'The operation failed because the client did not have the necessary security privilege.';
e90.code = 2147749986;
errors[2147749986] = e90;
const e91 = new Error('wbemErrInvalidOperator');
e91.description = 'The operator is not valid for this property type.';
e91.code = 2147749987;
errors[2147749987] = e91;
const e92 = new Error('wbemErrLocalCredentials');
e92.description =
  'The user specified a username, password or authority for a local connection. The user must use a blank username/password and rely on default security.';
e92.code = 2147749988;
errors[2147749988] = e92;
const e93 = new Error('wbemErrCannotBeAbstract');
e93.description =
  'The class was made abstract when its parent class is not abstract.';
e93.code = 2147749989;
errors[2147749989] = e93;
const e94 = new Error('wbemErrAmendedObject');
e94.description =
  'An amended object was put without the wbemFlagUseAmendedQualifiers flag being specified.';
e94.code = 2147749990;
errors[2147749990] = e94;
const e95 = new Error('wbemErrClientTooSlow');
e95.description =
  "Windows Server 2003:  The client was not retrieving objects quickly enough from an enumeration. This constant is returned when a client creates an enumeration object but does not retrieve objects from the enumerator in a timely fashion, causing the enumerator's object caches to get backed up.";
e95.code = 2147749991;
errors[2147749991] = e95;
const e96 = new Error('wbemErrNullSecurityDescriptor');
e96.description = 'Windows Server 2003:  A null security descriptor was used.';
e96.code = 2147749992;
errors[2147749992] = e96;
const e97 = new Error('wbemErrTimeout');
e97.description = 'Windows Server 2003:  The operation timed out.';
e97.code = 2147749993;
errors[2147749993] = e97;
const e98 = new Error('wbemErrInvalidAssociation');
e98.description =
  'Windows Server 2003:  The association being used is not valid.';
e98.code = 2147749994;
errors[2147749994] = e98;
const e99 = new Error('wbemErrAmbiguousOperation');
e99.description = 'Windows Server 2003:  The operation was ambiguous.';
e99.code = 2147749995;
errors[2147749995] = e99;
const e100 = new Error('wbemErrQuotaViolation');
e100.description =
  'Windows Server 2003:  WMI is taking up too much memory. This could be caused either by low memory availability or excessive memory consumption by WMI.';
e100.code = 2147749996;
errors[2147749996] = e100;
const e101 = new Error('wbemErrTransactionConflict');
e101.description =
  'Windows Server 2003:  The operation resulted in a transaction conflict.';
e101.code = 2147749997;
errors[2147749997] = e101;
const e102 = new Error('wbemErrForcedRollback');
e102.description = 'Windows Server 2003:  The transaction forced a rollback.';
e102.code = 2147749998;
errors[2147749998] = e102;
const e103 = new Error('wbemErrUnsupportedLocale');
e103.description =
  'Windows Server 2003:  The locale used in the call is not supported.';
e103.code = 2147749999;
errors[2147749999] = e103;
const e104 = new Error('wbemErrHandleOutOfDate');
e104.description = 'Windows Server 2003:  The object handle is out of date.';
e104.code = 2147750000;
errors[2147750000] = e104;
const e105 = new Error('wbemErrConnectionFailed');
e105.description =
  'Windows Server 2003:  Indicates that the connection to the SQL database failed.';
e105.code = 2147750001;
errors[2147750001] = e105;
const e106 = new Error('wbemErrInvalidHandleRequest');
e106.description = 'Windows Server 2003:  The handle request was not valid.';
e106.code = 2147750002;
errors[2147750002] = e106;
const e107 = new Error('wbemErrPropertyNameTooWide');
e107.description =
  'Windows Server 2003:  The property name contains more than 255 characters.';
e107.code = 2147750003;
errors[2147750003] = e107;
const e108 = new Error('wbemErrClassNameTooWide');
e108.description =
  'Windows Server 2003:  The class name contains more than 255 characters.';
e108.code = 2147750004;
errors[2147750004] = e108;
const e109 = new Error('wbemErrMethodNameTooWide');
e109.description =
  'Windows Server 2003:  The method name contains more than 255 characters.';
e109.code = 2147750005;
errors[2147750005] = e109;
const e110 = new Error('wbemErrQualifierNameTooWide');
e110.description =
  'Windows Server 2003:  The qualifier name contains more than 255 characters.';
e110.code = 2147750006;
errors[2147750006] = e110;
const e111 = new Error('wbemErrRerunCommand');
e111.description =
  'Windows Server 2003:  Indicates that an SQL command should be rerun because there is a deadlock in SQL. This can be returned only when data is being stored in an SQL database.';
e111.code = 2147750007;
errors[2147750007] = e111;
const e112 = new Error('wbemErrDatabaseVerMismatch');
e112.description =
  'Windows Server 2003:  The database version does not match the version that the repository driver processes.';
e112.code = 2147750008;
errors[2147750008] = e112;
const e113 = new Error('wbemErrVetoDelete');
e113.description =
  'Windows Server 2003:  WMI cannot do the delete operation because the provider does not allow it.';
e113.code = 2147750010;
errors[2147750010] = e113;
const e114 = new Error('wbemErrVetoPut');
e114.description =
  'Windows Server 2003:  WMI cannot do the put operation because the provider does not allow it.';
e114.code = 2147750010;
errors[2147750010] = e114;
const e115 = new Error('wbemErrInvalidLocale');
e115.description =
  'Windows Server 2003:  The specified locale identifier was not valid for the operation.';
e115.code = 2147750016;
errors[2147750016] = e115;
const e116 = new Error('wbemErrProviderSuspended');
e116.description = 'Windows Server 2003:  The provider is suspended.';
e116.code = 2147750017;
errors[2147750017] = e116;
const e117 = new Error('wbemErrSynchronizationRequired');
e117.description =
  'Windows Server 2003:  The object must be committed and retrieved again before the requested operation can succeed. This constant is returned when an object must be committed and re-retrieved to see the property value.';
e117.code = 2147750018;
errors[2147750018] = e117;
const e118 = new Error('wbemErrNoSchema');
e118.description =
  'Windows Server 2003:  The operation cannot be completed because no schema is available.';
e118.code = 2147750019;
errors[2147750019] = e118;
const e119 = new Error('wbemErrProviderAlreadyRegistered');
e119.description =
  'Windows Server 2003:  The provider registration cannot be done because the provider is already registered.';
e119.code = 2147750020;
errors[2147750020] = e119;
const e120 = new Error('wbemErrProviderNotRegistered');
e120.description =
  'Windows Server 2003:  The provider for the requested data is not registered.';
e120.code = 2147750021;
errors[2147750021] = e120;
const e121 = new Error('wbemErrFatalTransportError');
e121.description =
  'Windows Server 2003:  A fatal transport error occurred and other transport will not be attempted.';
e121.code = 2147750022;
errors[2147750022] = e121;
const e122 = new Error('wbemErrEncryptedConnectionRequired');
e122.description =
  'Windows Server 2003:  The client connection to WINMGMT must be encrypted for this operation. The IWbemServices proxy security settings should be adjusted and the operation retried.';
e122.code = 2147750023;
errors[2147750023] = e122;
const e123 = new Error('wbemErrRegistrationTooBroad');
e123.description =
  'Windows Server 2003:  The provider registration overlaps with the system event domain.';
e123.code = 2147753985;
errors[2147753985] = e123;
const e124 = new Error('wbemErrRegistrationTooPrecise');
e124.description =
  'Windows Server 2003:  A WITHIN clause was not used in this query.';
e124.code = 2147753986;
errors[2147753986] = e124;
const e125 = new Error('wbemErrTimedout');
e125.description = 'Windows Server 2003:  Automation-specific error.';
e125.code = 2147758081;
errors[2147758081] = e125;
const e126 = new Error('wbemErrResetToDefault');
e126.description = 'undefined';
e126.code = 2147758082;
errors[2147758082] = e126;

// *** end generated errors ***//

module.exports = errors;
