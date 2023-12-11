using AppIndicator.UWP;
using System;
using Windows.Foundation;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

public sealed partial class MainPage : Page
{
    private AppIndicator appIndicator;

    public MainPage()
    {
        this.InitializeComponent();
        this.Loaded += MainPage_Loaded;
    }

    private void MainPage_Loaded(object sender, RoutedEventArgs e)
    {
        CreateSystemTrayIcon();
    }

    private void CreateSystemTrayIcon()
    {
        appIndicator = new AppIndicator();

        // Set the icon (replace 'icon.png' with your icon)
        appIndicator.Icon = new Uri("ms-appx:///Assets/icon.png");

        // Add menu items
        appIndicator.MenuItems.Add(new AppIndicatorMenuItem("Option 1", OnOption1Clicked));
        appIndicator.MenuItems.Add(new AppIndicatorMenuItem("Option 2", OnOption2Clicked));
        appIndicator.MenuItems.Add(new AppIndicatorSeparator());

        // Add an exit option
        appIndicator.MenuItems.Add(new AppIndicatorMenuItem("Exit", OnExitClicked));

        // Show the indicator
        appIndicator.Show();
    }

    private void OnOption1Clicked(AppIndicatorMenuItem sender)
    {
        // Handle option 1 click
        // Add your logic here
    }

    private void OnOption2Clicked(AppIndicatorMenuItem sender)
    {
        // Handle option 2 click
        // Add your logic here
    }

    private void OnExitClicked(AppIndicatorMenuItem sender)
    {
        // Handle exit click
        Application.Current.Exit();
    }
}
