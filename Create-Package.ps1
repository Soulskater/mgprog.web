Param (
	[Parameter(Mandatory = $true)]
	[ValidateNotNullOrEmpty()]
	[string]
	$Name,

	[Parameter(Mandatory = $true)]
	[ValidateNotNullOrEmpty()]
	[string]
	$Directory,

	[switch]
	$Overwrite
)

# Library
[void] [System.Reflection.Assembly]::LoadWithPartialName("System.IO.Compression")
[void] [System.Reflection.Assembly]::LoadWithPartialName("System.IO.Compression.FileSystem")

Function Create-ZipFromDirectory
{
	Param (
		[Parameter(Mandatory=$true)]
		[ValidateNotNullOrEmpty()]
		[string]
		$File,

		[Parameter(Mandatory=$true)]
		[ValidateNotNullOrEmpty()]
		[string]
		$Directory
	)

	[void] [System.IO.Compression.ZipFile]::CreateFromDirectory($Directory, $File)
}

$packagePath = Join-Path $Env:BUILD_STAGINGDIRECTORY $Name

# Delete if already exists
If (Test-Path $packagePath -PathType Leaf)
{
	Write-Output "'$packagePath' found."
	Write-Output "Removing '$packagePath'..."
	Remove-Item $packagePath -Force
}

# Create package
Write-Output "Creating package '$Name' to '$packagePath'..."
Create-ZipFromDirectory -Directory $Directory -File $packagePath